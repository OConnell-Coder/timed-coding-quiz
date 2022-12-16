var timeDisplay = document.getElementById('time-left');
var startBtn = document.getElementById('start-button');
var banner = document.querySelector('main');
var timer;
var timerCount = 60;
var qI = 0;
var score = 0;

// var theQuestion = document.getElementById('question-text');
// var optA = document.getElementById('optA');
// var optB = document.getElementById('optB');
// var optC = document.getElementById('optC');
// var optD = document.getElementById('optD');

startBtn.addEventListener("click", startGame);

function startGame() {

    timer = setInterval(function() {
      timeDisplay.textContent = timerCount + " seconds left until game over!";
      timerCount--;
  
      if(timerCount < 1) {
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
  let { q, a, c } = questions[qI];
  banner.innerHTML = `<h1>${q}</h1><div id="answers"></div>`

  a.forEach(ans => {
    answers.innerHTML += `<button onclick="handleAnswers('${ans}')">${ans}</button>`;
  });

}

function handleAnswers(ans) {
  console.log(ans, questions[qI].c);

  if (ans == questions[qI].c) {
    score += 20;
  } else {
    timerCount -= 5;
  };

  qI++;

  handleQuestions();
}

// Questions to be asked

