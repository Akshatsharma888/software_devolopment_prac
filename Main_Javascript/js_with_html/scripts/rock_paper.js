function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

// Event listener for the reset score button
let resetButton = document.querySelector('.js-reset-score-button');
resetButton.addEventListener('click', () => {
  // Display confirmation message
  let confirmationMessage = document.querySelector('.js-rr_message');
  confirmationMessage.innerHTML = `
    Are you sure you want to reset the score?
    <button class="js-confirm-reset">Yes</button>
    <button class="js-cancel-reset">No</button>
  `;

  // Event listener for the "Yes" button
  let confirmButton = document.querySelector('.js-confirm-reset');
  confirmButton.addEventListener('click', () => {
    resetScore();
    confirmationMessage.style.display = 'none'; // Hide confirmation message
  });

  // Event listener for the "No" button
  let cancelButton = document.querySelector('.js-cancel-reset');
  cancelButton.addEventListener('click', () => {
    confirmationMessage.style.display = 'none'; // Hide confirmation message
  });

  // Display confirmation message
  confirmationMessage.style.display = 'block';
});


let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

let isAutoPlaying = false;
let AutoPlayId;

function autoPlay() {
  const autoPlayButton = document.querySelector(".js-auto-play-button");
  if (!isAutoPlaying) {
    AutoPlayId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.auto-play-button').innerHTML = "Stop Play";
  } else {
    clearInterval(AutoPlayId);
    isAutoPlaying = false;
    document.querySelector('.auto-play-button').innerHTML = "Auto Play";
  }
}
document.querySelector('.js-auto').addEventListener('click',()=>{
  autoPlay();
})

document.querySelector('.js-rock-button').addEventListener('click', () =>{
  playGame('rock')
});

document.querySelector('.js-paper-button').addEventListener('click', () =>{
  playGame('paper')
});
document.querySelector('.js-scissors-button').addEventListener('click', () =>{
  playGame('scissors')
});

document.body.addEventListener('keydown',(Event) => {
  if (Event.key === 'r'){
    playGame('rock');
  }else if (Event.key === 'p'){
    playGame('paper');
  }else if (Event.key === 's'){
    playGame('scissors');
  }else if (Event.key === 'a'){
    autoPlay();
  }else if (Event.key === 'Backspace'){
    resetScore();
  }
})
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
