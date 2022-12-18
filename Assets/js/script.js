var timeDisplay = document.getElementById('time-left');
var startBtn = document.getElementById('start-button');
var banner = document.querySelector('main');
var scoresBtn = document.getElementById('high-scores-btn');
var highScoresList = document.getElementById('score-board');
var timer;
var timerCount = 150;
var qI = 0;
var score = 0;
var qsAnswered = 0;
var playerScore;
var scoreBoard = [];

startBtn.addEventListener("click", startGame);

// scoresBtn.addEventListener("click", displayScores);

function startGame() {
    timer = setInterval(function() {
      timeDisplay.textContent = timerCount + " seconds";
      timerCount--;
  
      if(timerCount < 1) {
       endGame();
      }
  
    }, 1000);

    handleQuestions();
}

function handleQuestions() {

  let { q, a, c } = questions[qI];

  banner.innerHTML = `<h1>${q}</h1><div id="answers"></div>`

  a.forEach(ans => {
    answers.innerHTML += `<button onclick="handleAnswers('${ans}')">${ans}</button>`;
  });
}

function handleAnswers(ans) {
  // console.log(ans, questions[qI].c);

  if (ans == questions[qI].c) {
    score += 20;
  } else {
    timerCount -= 15;
  };

  qI++;

  qsAnswered++;

  // console.log(qsAnswered);

  if (qsAnswered > questions.length -1) {
    endGame();
  } else {
    handleQuestions(); 
  }

}

function compareNumbers(a, b) {
  return a - b;
}

function endGame() {
  clearInterval(timer);
  timeDisplay.textContent = "Game Over!";
  // console.log("Game Over!");

  timerCount = 150;

  var initials = prompt("Score: " + score + "/100. Enter your initials to save your score to the score board.");

  playerScore = {
    playerName: initials,
    theirScore: score
  };

  scoreBoard.push(playerScore);

  var sortedBoard = scoreBoard.sort(compareNumbers);

  localStorage.setItem("high-scores", JSON.stringify(sortedBoard));

  highScoresList.replaceChildren();

  for (var i = 0; i < sortedBoard.length; i++ ) {
    var listItem = document.createElement("p");
    highScoresList.appendChild(listItem);
    listItem.textContent = sortedBoard[i].playerName + " - " + sortedBoard[i].theirScore;
  }
}

// function displayScores() {

// }


