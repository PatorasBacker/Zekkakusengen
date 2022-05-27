// const { write } = require("needle/lib/cookies");

function twoDigit(num) {
    let ret;
    if( num < 10 ) 
      ret = "0" + num; 
    else 
      ret = num; 
    return ret;
  }
  function showClock1() {
    let nowTime = new Date();
    let nowMonth = (nowTime.getMonth()+1);
    let nowDay = nowTime.getDate();
    let nowHour = twoDigit( nowTime.getHours() );
    let nowMin  = twoDigit( nowTime.getMinutes() );
    // let nowSec  = twoDigit( nowTime.getSeconds() );
    let msg = nowMonth + "月" + nowDay + "日" + nowHour + "時" + nowMin + "分";
    document.getElementById("realtime").innerHTML = msg;
  }

fetch('http://localhost:2999/data.json').then(response => response.json())
  if(response.ok){
    response.json().then( jsondata => {
      console.log(jsondata);
    })
    return 0;
  }

  function valueChange(){
    console.log('起動したけど');

    let radiobtn1 = document.getElementById("conditions1");
    let radiobtn2 = document.getElementById("conditions2s");
      
    let conditions_value;
    let conditions_html;

    conditions_value = document.getElementById("conditions");

    if (radiobtn1.checked == true) {

    conditions_html = conditions_html + '<select id="day" name="day">';
    conditions_html = conditions_html + '<option value="1" selected>今日</option>';
    conditions_html = conditions_html + '<option value="2">明日</option>';
    conditions_html = conditions_html + '<option value="3">明後日</option>';
    conditions_html = conditions_html + '<option value="4">明々後日</option>';
    conditions_html = conditions_html + '</select><br>';

    document.getElementById("conditions_home").innerHTML = conditions_html;
    }else if (radiobtn2.checked == true) {

      conditions_html = conditions_html + '<select id="time" name="time">';
      conditions_html = conditions_html + '<option value="time1" selected>今日</option>';
      conditions_html = conditions_html + '<option value="time2">明日</option>';
      conditions_html = conditions_html + '<option value="time3">明後日</option>';
      conditions_html = conditions_html + '<option value="time4">明々後日</option>';
      conditions_html = conditions_html + '</select><br>';

      document.getElementById("conditions_home").innerHTML = conditions_html;

    }
    
}


let conditions_change = document.getElementById('conditions');
conditions_change.addEventListener('change', valueChange);

showClock1();
setInterval('showClock1()',1000);

