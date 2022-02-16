function timer() {
  let currentTime = document.getElementById('time').innerHTML;
  console.log(currentTime)
  let timeArray = currentTime.split(/[:]+/);
  console.log(timeArray)
  var min = timeArray[0]; //take minutes
  var sec = secondTimer((timeArray[1] - 1));
  if(sec==59){min=min-1}
  if(min<0){
    return document.getElementById('time').innerHTML = "time is over!"
  }
//   if (sec==0 && min ==0){
//     document.getElementById('time').innerHTML = "time is over!"
//       //compare scores between computer and human
//   }

  document.getElementById('time').innerHTML =
    min + ":" + sec;
  console.log(min)
  setTimeout(timer, 1000);
}

function secondTimer(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}


document.getElementById('time').innerHTML =
  00 + ":" + 05;
timer();
