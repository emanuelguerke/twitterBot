console.log("bot start");

let Twitter = require("twitter");
let config = require("./config")
let T = new Twitter(config);

var params = {
    q: '#100daysofcode',
    count: 10,
    result_type: 'recent'
  }
autoLike();
setInterval(autoLike, 1000*60);


  function autoLike(){
    T.get('search/tweets', params, 
    function (err, data, response) {
      if (!err) {
        // Loop nos twet buscados
        for (let i = 0; i < data.statuses.length; i++) {
          // twet id
          let id = { id: data.statuses[i].id_str }
          // tenta favoritar o twet
          T.post('favorites/create', id, function (err, response) {
            // mensagem de erro
            if (err) {
              console.log(err.message);
            }
            // mostra url dos twet
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
  
  }