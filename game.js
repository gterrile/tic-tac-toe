// Tic Tac Toe

////////////////////////////////////////////////////
// Global Variables
////////////////////////////////////////////////////



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

console.table(gameBoard.display())

////////////////////////////////////////////////////
// Player (name, token)
// Create function to allow player to mark the board
// Create function to calculate the winner 
////////////////////////////////////////////////////

function createPlayer(name, token) {
  let score = 0;

  const setScore = function(a) {
    return score = a;
  }

  const getScore = () => score;

  return {
    name, token, setScore, getScore
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
  console.log('Choose game type: vs Computer / vs Player2')

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

  return { setType, 
    getType, 
    setSessionScore, 
    getSessionScore, 
    increaseGameCount, 
    getGameCount,
    getActivePlayer
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

////////////////////////////////////////////////////
// computerPlay()
// Create a function so the computer picks where to play.


////////////////////////////////////////////////////
// GAME EXECUTION //

const game = newSession();



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


