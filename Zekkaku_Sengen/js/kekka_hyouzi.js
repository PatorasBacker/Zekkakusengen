let URL_c = "";
let URL_s = "";
let URL_chara;
let URL_situation;
let URL_you_c;
let URL_you_s;

function gazoukensaku(){
    // alert('あなたは〇〇までに' + chara_value.value + 'が' + situation_value.value +'イラストを描いてください！');
    URL_chara = document.getElementById('chara');
    URL_situation = document.getElementById('situation');
    tweet_time_hyouzi =  document.getElementById('time');

    tweet_time_hyouziyou = tweet_time_hyouzi.value;
    URL_you_c = URL_chara.value;
    URL_you_s = URL_situation.value;

    URL_you_c=URL_chara.value.replace(chara_name[chara_number][0] + 'の', chara_name[chara_number][0] + '%20');
    URL_you_s=URL_situation.value.replace(situation_name[situation_number] , situation_name[situation_number]  + '%20萌えイラスト');

    URL_c = 'https://www.google.co.jp/search?q=' + URL_you_c + '&tbm=isch&ved=2ahUKEwimqMuvgN_1AhWEDd4KHcSZASEQ2-cCegQIABAA&oq=%E3%83%96%E3%83%AB%E3%82%A2%E3%82%AB%E3%80%80%E3%83%A6%E3%82%A6%E3%82%AB&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoGCAAQBxAeOgcIABCABBAEOgYIABAEEBg6DQgAEIAEELEDEIMBEAQ6BggAEAQQAzoICAAQsQMQgwE6CwgAEIAEEAQQJRAgOgoIABAEECUQIBAYOgwIABAEEAoQJRAgEBhQyQRYryJgnyNoAXAAeACAAYYBiAGyDJIBBDEzLjSYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=R2r5YeboI4Sb-AbEs4aIAg&bih=710&biw=1429&hl=ja';
    URL_s = 'https://www.google.co.jp/search?q=' + URL_you_s + '&tbm=isch&ved=2ahUKEwimqMuvgN_1AhWEDd4KHcSZASEQ2-cCegQIABAA&oq=%E3%83%96%E3%83%AB%E3%82%A2%E3%82%AB%E3%80%80%E3%83%A6%E3%82%A6%E3%82%AB&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoGCAAQBxAeOgcIABCABBAEOgYIABAEEBg6DQgAEIAEELEDEIMBEAQ6BggAEAQQAzoICAAQsQMQgwE6CwgAEIAEEAQQJRAgOgoIABAEECUQIBAYOgwIABAEEAoQJRAgEBhQyQRYryJgnyNoAXAAeACAAYYBiAGyDJIBBDEzLjSYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=R2r5YeboI4Sb-AbEs4aIAg&bih=710&biw=1429&hl=ja';

    if(tweet_time_hyouziyou.indexOf('time') > -1){
    tweet_time_hyouziyou=tweet_time_hyouziyou.replace("time1","１時間後！");
    tweet_time_hyouziyou=tweet_time_hyouziyou.replace("time2","２時間後！");
    tweet_time_hyouziyou=tweet_time_hyouziyou.replace("time3","３時間後！");
    tweet_time_hyouziyou=tweet_time_hyouziyou.replace("time4","４時間後！");
    tweet_time_hyouziyou=tweet_time_hyouziyou.replace("time5","５時間後！");
    tweet_time_hyouziyou=tweet_time_hyouziyou.replace("time6","６時間後！");
    }else{
    tweet_time_hyouziyou=tweet_time_hyouziyou.replace("1","今日！");
    tweet_time_hyouziyou=tweet_time_hyouziyou.replace("2","明日！");
    tweet_time_hyouziyou=tweet_time_hyouziyou.replace("3","明後日！");
    tweet_time_hyouziyou=tweet_time_hyouziyou.replace("4","明々後日！");
    }
    tweet_time_hyouzi.value = tweet_time_hyouziyou;

    document.getElementById('tweet_time').innerHTML = '投稿時間:' + tweet_time_hyouzi.value + '<br>';
    document.getElementById('odai').innerHTML = '描くキャラクター:' + URL_chara.value + '<br>' + '参考お題:' + URL_situation.value + 'イラスト';
    document.getElementById('URL_c').innerHTML = '<a href="' + URL_c + '"target="_blank" class="btn" rel="noopener noreferrer">キャラクター画像検索<i class="fas fa-angle-down fa-position-right"></i></a>';
    document.getElementById('URL_s').innerHTML = '<a href="' + URL_s + '"target="_blank" class="btn" rel="noopener noreferrer">参考お題検索<i class="fas fa-angle-down fa-position-right"></i></a>';
    document.getElementById('URL_twitter').innerHTML = '<a href="https://twitter.com/ilmDcEGXKHQU2oU"target="_blank" class="btn" rel="noopener noreferrer">Twitterへ<i class="fas fa-angle-down fa-position-right"></i></a>';
    tweeted();
}

function tweeted(){
    let h1 = document.getElementById('h');  
    h1.remove();

    document.getElementById('label1').hidden = true;
    document.getElementById('label2').hidden = true;
    document.getElementById('Radio1').hidden = true;
    document.getElementById('Radio2').hidden = true;
    document.getElementById('sendbutton').hidden = true;
    document.getElementById('times').hidden = true;
    alert('ツイートされました！');
}