var timeDisplay = document.getElementById('time-left');
var startButton = document.getElementById('start-button');
var timer;
var timerCount = 5;

startButton.addEventListener("click", startGame);

function startGame() {

    timer = setInterval(function() {
      timeDisplay.textContent = timerCount + " seconds left until game over!";
      timerCount--;
  
      if(timerCount === -1) {
       endGame();
      }
  
    }, 1000);

    handleQuestions();
  }

function endGame() {
    clearInterval(timer);
    timeDisplay.textContent = "Game Over!";
    // console.log("Game Over!");
}

function handleQuestions() {
    //code here
}
