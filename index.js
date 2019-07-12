console.log("bot start");

let Twit = require("twit");
var config = require("./config")
var T = new Twit(config);
//user stream
var stream = T.stream('user');
//someone follows me
stream.on('follow', followed);
//event message
function followed(eMsg) {
  var name = eMsg.source.name;
  var screenName = eMsg.source.screen_name;
  twitIt(`@ ${screenName} Thanks for follow me`);
}

//twitIt();
//setInterval(twitIt, 10000*60);

// tweet something
function twitIt(text) {
  let randomNumber = Math.floor(Math.random()*200);

  let tweet = {
    status: text
  }

  T.post('statuses/update', tweet,
    function (err, data, response) {
      if(err){
        console.log(err);
      }else{
        console.log(data)
      }
    })
}

//get data
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, 
    function(err, data, response) {
    console.log(data);
  })

