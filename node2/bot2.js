console.log('The bot is starting');

//Importing Twit
var Twit = require('twit');

//Importing config.js
var config = require('./config');

//Establishing connexion with the Twitter API with config.js
var T = new Twit(config);

var tweet = { 
    status: 'hello world!'
};

T.post('statuses/update', tweet, gotData);
  
function gotData(err, data, response) {
    console.log(data);
  }