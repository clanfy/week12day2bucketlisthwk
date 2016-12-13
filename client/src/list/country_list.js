var Country = require('./country.js'); 
var CountryList = function() {
  this.countries = [];
};

CountryList.prototype = {
  addCountry: function(country){
    this.countries.push(country);
  }

};


module.exports = CountryList;
