const choiceBtns = document.querySelectorAll("button");
const playerScoreTotal = document.getElementById('playerScore');
const computerScoreTotal = document.getElementById('computerScore');
const showYourChoice = document.getElementById('showYourChoice');
const showComputerChoice = document.getElementById('showComputerChoice');
const result = document.getElementById('showResult');
const announceWinner = document.getElementById('winner');
//winner function
const postWinner = () =>{
    if (playerScore > computerScore){
        announceWinner.innerHTML = 'Congratlations! You won the game!';
    } else if (playerScore > computerScore) {
        announceWinner.innerHTML = 'Too bad! Computer won the game! I encourage you to try again! ';
    } else {
        announceWinner.innerHTML = 'Tie ! You almost there!';
    }
}

//Time
function timer() {
  let currentTime = document.getElementById('time').innerHTML;
  //console.log(currentTime)
  let timeSplit = currentTime.split(/[:]+/);
  //console.log(timeSplit)
  var min = timeSplit[0]; //take minutes
  var sec = secondTimer((timeSplit[1] - 1));
  if(sec == 59)
    { min= min-1}
  if(min<0){//stophere
    document.getElementById('time').innerHTML = "time is over!";
    showYourChoice.innerHTML = "";
    showComputerChoice.innerHTML="";
    result.innerHTML="";
    return postWinner();
  }
//   if (sec==0 && min ==0){
//     document.getElementById('time').innerHTML = "time is over!"
//       //compare scores between computer and human
//   }

  document.getElementById('time').innerHTML = min + ":" + sec;
  //console.log(min)
  setTimeout(timer, 1000);
}

function secondTimer(sec) {
  if (sec < 10 && sec >= 0) 
    {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) 
    {sec = "59"};
  return sec;
}

document.getElementById('time').innerHTML = 00 + ":" + 05;
timer(); //start

//computer random choice
const randomChoice = ()=>{
    let choice = ['scissor','rock','paper'];
    let index = Math.floor(Math.random() * choice.length);
    //console.log(choice[index]);
    return choice[index];
}
//randomChoice();   testing

//player choice
choiceBtns.forEach(function (btn) {
    btn.addEventListener('click', function() {
        let playerChoice = btn.id;
        let computerChoice = randomChoice();
        showYourChoice.textContent = `Yours: ${playerChoice}`;
        showComputerChoice.textContent=` Computer choose: ${computerChoice}`;
        compareChoice(computerChoice,playerChoice);
        
    });
  });
var playerScore = 0;
var computerScore = 0;
playerScoreTotal.textContent = `Your score: ${playerScore}`;
computerScoreTotal.textContent = `Computer score: ${computerScore}`;

//compare Choice, if playerwin, score ++, else computer score++
const compareChoice = (computerChoice, playerChoice)=> {
   
    if(playerChoice === 'iWin'){
        //player won
        playerScore++;
        result.textContent = 'Hoo! Your won!!';
        playerScoreTotal.textContent = `Your score: ${playerScore}`;
    }
    if(playerChoice === 'reset'){
        result.textContent = 'No winer, score reset';
        computerScore = 0;
        playerScore = 0;
        computerScoreTotal.textContent = `Computer score: ${computerScore}`;
        playerScoreTotal.textContent = `Your score: ${playerScore}`;
        
    }

    if(playerChoice === computerChoice){
        result.innerHTML= 'Tie, keep going!';
    }
    else if(playerChoice == 'rock'){
        if(computerChoice == 'paper'){
            result.textContent = 'Too bad! Computer Won :(';
            computerScore++;
            computerScoreTotal.textContent = `Computer score: ${computerScore}`;

        }else{
            result.textContent = 'Hooray! Your won!! :)'
            playerScore++;
            playerScoreTotal.textContent = `Your score: ${playerScore}`;
        }
    }
    else if(playerChoice == 'scissors'){
        if(computerChoice == 'rock'){
            result.textContent = 'Computer Won :(';
            computerScore++;
            computerScoreTotal.textContent = `Computer score: ${computerScore}`;
        }else{
            result.textContent = 'Your won!! :)';
            playerScore++;
            playerScoreTotal.textContent = `Your score: ${playerScore}`;
        }
    }
    else if(playerChoice == 'paper'){
        if(computerChoice == 'scissors'){
            result.textContent = 'Computer Won :(';
            computerScore++;
            computerScoreTotal.innerHTML = `Computer score: ${computerScore}`;
        }else{
            result.textContent = 'Your won!! :)';
            playerScore++;
            playerScoreTotal.innerHTML = `Your score: ${playerScore}`;
        }
    }
}



