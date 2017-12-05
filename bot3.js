console.log('The bot is starting');

//Importing Twit
var Twit = require('twit');

//Importing config.js
var config = require('./config');

//Establishing connexion with the Twitter API with config.js
var T = new Twit(config);

tweetIt();
setInterval(tweetIt, 1000*20);

function tweetIt(){

    var r = Math.floor(Math.random()*100);

    var tweet = {
        status : 'random number ' + r + ' #hackathonhut'
    }

    T.post('statuses/update', tweet, gotData);
    
    function gotData(err, data, response) {
        if (err)    console.log("Something went wrong!");
        else    console.log("It worked!");
    }

}

