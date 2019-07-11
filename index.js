console.log("bot start");

let Twit = require("twit");
var config = require("./config")
var T = new Twit(config);

// twit something
T.post('statuses/update', { status: 'Learning how twitter api works' },
 function(err, data, response) {
    console.log(data)
  })
//get data
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, 
    function(err, data, response) {
    console.log(data);
  })

