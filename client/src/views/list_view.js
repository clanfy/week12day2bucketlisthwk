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
    console.log(response);
   if (response.target.status !== 200) return;
   var responseText = response.target.responseText;
   var countries = JSON.parse(responseText);

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

  });

 }.bind(this),



};

module.exports = ListView;
