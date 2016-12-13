var Country = require('./country.js'); 
var CountryList = function() {
  this.countries = [];
  this.onFetchSuccess = null;
};

CountryList.prototype = {

  addCountry: function(country){
    this.countries.push(country);
  },
  fetchCountries: function(){
    var url = 'http://localhost:3000';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      if (request.status === 200){
        var sampleCountries = JSON.parse(request.responseText);
        for(country of sampleCountries){
          this.addCountry(new Country(country));
        }
        this.onFetchSuccess();
      }
    }.bind(this);
    request.send(null);
  }
};


module.exports = CountryList;
