// パッケージを読み込む
const http = require('http');
const hostname = '127.0.0.1';//127.0.0.1はlocalhostを表す特別な番号
const port = 3000;
// const test_tweet = require("./tweet.js");

//ツイッターデータ
var util = require('util');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'jaNul6LTmxVcqWagnvEjI9JHt',
  consumer_secret: 'V9tFBvHD7T5pJvaLYRbkGOeAnJuexn430sz9zfVeYSSWf2nY9d',
  access_token_key: '1480538650849198090-8dirDQshpkuvtGhAikcS7OzIRO89VE',
  access_token_secret: 'do6iv6vmbenUuCNnfMsela9F2ua6jZvA4tr429DTydovq'
});

//ツイート内容
let params = {
  status: '',
  media_ids:''
};

// サーバ機能の初期化
let server = http.createServer();
// リクエストがきたときに呼び出される

server.on('request', function(req, res)
{
  
  if(req.method === 'GET') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(html);
  } else if(req.method === 'POST') {
    
   //POSTデータを受けとる
   let data = '';
   console.log(data);

   req.on('data', function(chunk) {data += chunk})
      .on('end', function() {
        data=decodeURI(data);
        // if(data.indexOf("day=5") > -1){
        //   var randam = ['今日！','明日！', '明後日！', '明々後日！'];
        //   var randam_number = Math.floor( Math.random() * randam.length );
        //   var day = randam[randam_number];
        //   data=data.replace("day=5",randam[randam_number]);
        // }
        data=data.replace("time=1","今日！");
        data=data.replace("time=2","明日！");
        data=data.replace("time=3","明後日！");
        data=data.replace("time=4","明々後日！");

        data=data.replace("time=time1","1時間後！");
        data=data.replace("time=time2","2時間後！");
        data=data.replace("time=time3","3時間後！");
        data=data.replace("time=time4","4時間後！");
        data=data.replace("time=time5","5時間後！");
        data=data.replace("time=time6","6時間後！");
        
        
        data=data.replace("time=","");
        data=data.replace("&chara=","");
        data=data + "のイラストを上げます！";
        // console.log(data);
        params.status = data;
        tweet();
      })
 
   };
    console.log(`サーバーにアクセスされました`);
    // 本文（Body部）に文字を表示する
    // res.write('complate');
    res.end();
});



function tweet() {
  var data = require('fs').readFileSync('../img/image.png');

// Make post request on media endpoint. Pass file data as media parameter
client.post('media/upload', {media: data}, function(error, media, response) {

  if (!error) {
    
    params.media_ids = media.media_id_string;
    
  client.post('statuses/update', params, function(error, tweet, response) {
    if (!error) {
      // console.log(tweet);
      console.log('ツイート結果:' + params.status);
    }else{
      console.log(error);
    }
  });
}
});
}



//3000 番ポートでリクエストを待機し、受信したときにログ出力するコールバック関数
server.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}/で投稿サーバーを起動しました`);
  });