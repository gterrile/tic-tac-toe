// Tic Tac Toe

////////////////////////////////////////////////////
// Global Variables
////////////////////////////////////////////////////
const computer = document.getElementById('computer');
const player2 = document.getElementById('player2');
const gameTypeBtnList = document.querySelectorAll('.btn-game-type');
const landingContainer = document.getElementById('landing-container');
const vsPlayerSetup = document.getElementById('player2-setup-container');
const vsComputer = document.getElementById('computer-setup-container');
const btnStartPlayerGame = document.getElementById('btn-start-game-player');
const btnStartComputerGame = document.getElementById('btn-start-game-computer');
const gameContainerSetup = document.getElementById('game-container');

const tic = document.getElementById('tic');
const tac = document.getElementById('tac');
const toe = document.getElementById('toe');

const inputPlayer1 = document.getElementById('input-player-1');
const inputPlayer2 = document.getElementById('input-player-2');
const tknP1op1 = document.getElementById('token-p1-1');
const tknP1op2 = document.getElementById('token-p1-2');
const tknP1op3 = document.getElementById('token-p1-3');
const tknP2op1 = document.getElementById('token-p2-1');
const tknP2op2 = document.getElementById('token-p2-2');
const tknP2op3 = document.getElementById('token-p2-3');

const btnTokenListPlayer1 = document.querySelectorAll('.token-player1');
const btnTokenListPlayer2 = document.querySelectorAll('.token-player2');

////////////////////////////////////////////////////
// Gameboard:
// Array of 9 spots. 
// Each stop will have a class of empty or marked.
// If marked will display players token.
////////////////////////////////////////////////////
const gameBoard = (function() {
  
  let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  const display = () => board

  return {
    display
  }
})();

// console.table(gameBoard.display())



////////////////////////////////////////////////////
// Player (name, token)
// Create function to allow player to mark the board
// Create function to calculate the winner 
////////////////////////////////////////////////////

function createPlayers() {
  
  console.log('Input players name and choose a token');
  
  let player1Name = '';
  let player2Name = '';
  
  let player1Token = '';
  let player2Token = '';

  btnTokenListPlayer1.forEach(item => {
    item.addEventListener('click', function() {
      console.log('Selected', item.id)

    })
  })

  btnTokenListPlayer2.forEach(item => {
    item.addEventListener('click', function() {
      console.log(item.id)
    })
  })

  inputPlayer1.addEventListener('input', function() {
    setName(1, inputPlayer1.value)
    console.log({player1Name});
  })

  inputPlayer2.addEventListener('input', function() {
    setName(2, inputPlayer2.value)
    console.log({player2Name});
  })

  btnStartPlayerGame.addEventListener('click', function() {
    clearPage();
    loadGamePage();
  })

  let score = 0;

  const setName = function(player, name) {
    if (player == 1) {
      return player1Name = name;
    }
    if (player == 2) {
      return player2Name = name
    }
  }

  const getName = function(player) {
    if (player == 1) {
      return player1Name
    }
    if (player == 2) {
      return player2Name
    }
  }

  const setScore = function(a) {
    return score = a;
  }

  const getScore = () => score;

  return {
    setName,  getName, setScore, getScore
  }
}

// const player1 = createPlayer('german', 'X');
// player1.setScore(5);
// console.log(player1.name, player1.getScore())


/////////////////////////////////////////////////////
// Gameflow:
// Game types: Player vs Player / Player vs Computer.
// Player chooses X or O.
// Keep count of gamesPlayed.
////////////////////////////////////////////////////

// Create a best out of 7 games session
function newSession() {
  console.log('Start New Game Session (best out of 7');
  console.log('Select Game Type')

  let players = {
    player1: '',
    player2: ''
  }

  player2.addEventListener('click', function(e) {
    console.log('Selected: ', player2.id)
    session.setType(player2.id);
    clearPage();
    loadvsPlayerSetup()
    players = createPlayers();
  })

  // computer.addEventListener('click', function(e) {
  //   console.log('Selected: ', computer.id)
  //   session.setType(computer.id);
  //   clearPage();
  //   loadvsComputerSetup()
  //   btnStartComputerGame.addEventListener('click', function() {
  //     clearPage();
  //     loadGamePage();
  //   })
  // })

  let gameCount = 0;
  const increaseGameCount = () => gameCount++;
  const getGameCount = () => gameCount;

  // User will have to select the game type and
  // oponent will be 'computer' or 'player2'
  let type = '';
  
  const setType = function(oponent) {
    return type = oponent;
  }
  const getType = () => type;

  let sessionScore = {
    player1: 0,
    oponent: 0
  }
  const setSessionScore = function(a, b) {
    return sessionScore = {
      player1: a,
      player2: b
    }
  }
  const getSessionScore = () => sessionScore;

  const getActivePlayer = () => (gameCount % 2 == 0) ? 2 : 1;


  const getPlayers = () => players;

  return { setType, 
    getType, 
    setSessionScore, 
    getSessionScore, 
    increaseGameCount, 
    getGameCount,
    getActivePlayer,
    getPlayers
  }
}

function newGame() {
  
}

function placeToken() {

}

function checkGameWinner() {

}

function checkSessionWinner() {
  const sessionCount = {
    player1: value,
    player2: value
  }
}

function displayScore() {

}

function clearPage() {
  landingContainer.setAttribute('style', 'display: none');
  vsPlayerSetup.setAttribute('style', 'display: none');
  vsComputer.setAttribute('style', 'display: none');
}

function loadvsPlayerSetup() {
  vsPlayerSetup.setAttribute('style', 'display: grid');
}

function loadvsComputerSetup() {
  vsComputer.setAttribute('style', 'display: grid');
}

function loadGamePage() {
  gameContainerSetup.setAttribute('style', 'display: grid');
}


function moveTitle() {
  setTimeout(function() {
    const ticPos = Math.floor(Math.random() * 3) + 1;
    const tacPos = Math.floor(Math.random() * 2) + 1;
    const toePos = Math.floor(Math.random() * 3) + 1;

    tic.setAttribute('style', `grid-row: ${ticPos}`);
    tac.setAttribute('style', `grid-row: ${tacPos}`);
    toe.setAttribute('style', `grid-row: ${toePos}`);
    if ((ticPos == 1 && tacPos == 2 && toePos == 3) || 
    (ticPos == 3 && tacPos == 2 && toePos == 1) || (
      ticPos == tacPos && ticPos == toePos)) {
      tic.setAttribute('style', `color: #5272F2; font-size: 2.3rem`);
      tac.setAttribute('style', `color: #5272F2; font-size: 2.3rem`);
      toe.setAttribute('style', `color: #5272F2; font-size: 2.3rem`);
    }

    moveTitle();
  }, 500)
}


////////////////////////////////////////////////////
// computerPlay()
// Create a function so the computer picks where to play.


////////////////////////////////////////////////////
// GAME EXECUTION //

const session = newSession();

vsPlayerSetup.setAttribute('style', 'display: none');
vsComputer.setAttribute('style', 'display: none');
gameContainerSetup.setAttribute('style', 'display: none');
// const lala = moveTitle(500);














// game.increaseGameCount();
// console.log('Game Count', game.getGameCount());
// console.log('active player', game.getActivePlayer())

// game.increaseGameCount();
// console.log('Game Count', game.getGameCount());
// console.log('active player', game.getActivePlayer())
// game.increaseGameCount();
// console.log('Game Count', game.getGameCount());
// console.log('active player', game.getActivePlayer())
// game.increaseGameCount();
// console.log('Game Count', game.getGameCount());
// console.log('active player', game.getActivePlayer())
// game.increaseGameCount();
// console.log('Game Count', game.getGameCount());
// console.log('active player', game.getActivePlayer())


// game.setSessionScore(3, 2);
// console.log(game.getSessionScore());

