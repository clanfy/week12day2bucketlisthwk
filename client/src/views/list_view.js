var ListView = function(list) {
  this.list = list;
};

ListView.prototype = {

  // bindEvents: function(){

  //   var select = document.getElementById('country-select');
  //   select.onchange = function(e){
  //     e.preventDefault(); 

  //     var country = {
  //       owner: e.target.owner.value,
  //       amount: parseFloat(e.target.amount.value),
  //       type: e.target.type.value
  //     };

  //     //optimistic update front end before saving it to db
  //     this.bank.addAccount(new Account(account));
  //     this.render();
  //     this.saveAccount(account);
  //   }.bind(this);
  // }

  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },

  requestComplete: function(response){
    console.log("response", response);
    if (response.target.status !== 200) return;
    var responseText = response.target.responseText;
    // console.log("response text", responseText);
    var countries = JSON.parse(responseText);
    console.log("countries", countries);

    var selectCountries = document.querySelector('#country-select');
    countries.forEach(function (item, index){
      item.index = index;
      var option = document.createElement("option");
      option.value = index.toString();
      option.text = item.name;
      selectCountries.appendChild(option);
    });

    selectCountries.addEventListener('change', function(event){
      var index = this.value;
      var country = countries[index];
      updateDisplay(country);
      localStorage.setItem("selectedCountry",
        JSON.stringify(country));
    });

  }.bind(this),

  updateDisplay: function(stuff){
    var tags = document.querySelectorAll('#info p');
    tags[0].innerText = stuff.name;
    tags[1].innerText = stuff.latlng[0];
    tags[2].innerText = stuff.latlng[1];
  },

  render: function(){
    var countryList = document.getElementById('country-list');

  },

  createItemForCountry: function(country){
    var countryListItem = document.createElement('li');
    countryListItem.innerText = country.name;
    return countryListItem;
  },

  populateCountryList: function(listElement, countries){
    for (country of countries){
      listElement.appendChild(this.createItemForAccount(account));
    }

  }



};

module.exports = ListView;
