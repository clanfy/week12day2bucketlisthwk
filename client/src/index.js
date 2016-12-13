var List = require('./list/country_list.js');
var ListView = require('./views/list_view.js');


window.onload = function() {
  var list = new List();
  var listView = new ListView();
  var countriesUrl = 'https://restcountries.eu/rest/v1';

  listView.makeRequest(countriesUrl, listView.requestComplete);

  // var url = "http://localhost:3000/accounts";
  // var request = new XMLHttpRequest();
  // request.open('GET', url);
  // request.onload = function(){
  //   if (request.status == 200){
  //     // var sampleAccounts = JSON.parse(request.responseText);

  //     //   for(account of sampleAccounts) {
  //     //     bank.addAccount(new Account(account));
  //       }
  //       var listView = new ListView(list);
  //       listView.bindEvents();
  //       listView.render();
  //     };
  //   request.send();
};







