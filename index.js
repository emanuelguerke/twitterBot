console.log("bot start");

let Twit = require("twit");
var config = require("./config")
var T = new Twit(config);

//search parameters
var params = {
  q: '#100DaysOfCode',
  count: 10
}
T.get('search/tweets', params, 
  function (err, data, response) {
    if (!err) {
      // Loop through the returned tweets
      for (let i = 0; i < data.statuses.length; i++) {
        // Get the tweet Id from the returned data
        let id = { id: data.statuses[i].id_str }
        // Try to Favorite the selected Tweet
        T.post('favorites/create', id, function (err, response) {
          // log the error message
          if (err) {
            console.log(err.message);
          }
          // log the url of the tweet
          else {
            let username = response.user.screen_name;
            let tweetId = response.id_str;
            console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
          }
        });
      }
    } else {
      console.log(err);
    }
  })

// //user stream
// var stream = T.stream('user');
// //someone follows me
// stream.on('follow', followed);
// //event message
// function followed(eMsg) {
//   var name = eMsg.source.name;
//   var screenName = eMsg.source.screen_name;
//   twitIt(`@ ${screenName} Thanks for follow me`);
// }

// //twitIt();
// //setInterval(twitIt, 10000*60);

// // tweet something
// function twitIt(text) {
//   let randomNumber = Math.floor(Math.random()*200);

//   let tweet = {
//     status: text
//   }

//   T.post('statuses/update', tweet,
//     function (err, data, response) {
//       if(err){
//         console.log(err);
//       }else{
//         console.log(data)
//       }
//     })
// }

// //get data
// T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, 
//     function(err, data, response) {
//     console.log(data);
//   })

