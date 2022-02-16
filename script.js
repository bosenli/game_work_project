function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  console.log(presentTime)
  var timeArray = presentTime.split(/[:]+/);
  console.log(timeArray)
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  if (s==0 && m ==0){
      console.log("time is over")
  }
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}


document.getElementById('timer').innerHTML =
  01 + ":" + 11;
startTimer();
