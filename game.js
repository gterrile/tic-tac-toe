function gameFlow() {

  
  // Define variables
  const player1score = document.getElementById('player1-score');
  const player2score = document.getElementById('player2-score');
  player1score.textContent = '0';
  player2score.textContent = '0';
  let board = ['','','','','','','','','',''];
  const cells = document.querySelectorAll('.boardCell');
  let isThereAWinner = false;
  const newGame = document.getElementById('newGame');
  const counter = document.getElementById('counter');
  const boardContainer = document.getElementById('boardContainer');
  const textCell = document.querySelectorAll('.textCell');

  let score = {
    player1: 0,
    player2: 0
  }

  console.log('New Game Started');

  // // New game
  // newGame.addEventListener('click', function() {
  //   // Reset board
  //   board = ['','','','','','','','','',''];
  //   cells.forEach(cell => {
  //   cell.firstChild.textContent = '';
  //   isThereAWinner = false;
  //   })
  // });

  // Event Listener for Players Token
  cells.forEach(cell => {
    cell.addEventListener('click', function() {
    placeToken(cell)
    })
  })

  let activePlayer = 1;
  const switchPlayers = () => activePlayer == 1 ? activePlayer++ : activePlayer--;

  function placeToken(cell) {
    if (cell.textContent == '' && !isThereAWinner) {
      if (activePlayer == 1) {
        cell.firstChild.textContent = 'X';
        //console.log('Player', activePlayer, 'Placed X on cell:', cell.id)
        board[cell.id] = 'X'
        //console.table(board);
        checkWinner();
        switchPlayers();
      }
      else {
        cell.firstChild.textContent = 'O';
        //console.log('Player', activePlayer, 'Placed O on cell:', cell.id)
        board[cell.id] = 'O'
        //console.table(board);
        checkWinner();
        switchPlayers();
      }
    }
  }

  function checkWinner() {
    if (board[1] != '' && board[1] == board[2] && board[2] == board[3]) {
      weHaveAWinner()
    }
    if (board[4] != '' && board[4] == board[5] && board[5] == board[6]) {
      weHaveAWinner()
    }
    if (board[7] != '' && board[7] == board[8] && board[8] == board[9]) {
      weHaveAWinner()
    }
    if (board[1] != '' && board[1] == board[4] && board[4] == board[7]) {
      weHaveAWinner()
    }
    if (board[2] != '' && board[2] == board[5] && board[5] == board[8]) {
      weHaveAWinner()
    }
    if (board[3] != '' && board[3] == board[6] && board[6] == board[9]) {
      weHaveAWinner()
    }
    if (board[1] != '' && board[1] == board[5] && board[5] == board[9]) {
      weHaveAWinner()
    }
    if (board[3] != '' && board[3] == board[5] && board[5] == board[7]) {
      weHaveAWinner()
    }
  }

  function autoRestart() {
    counter.setAttribute('style', 'display: block');
    setTimeout(function(){
      counter.textContent = '3'
    },50)

    setTimeout(function(){
      counter.textContent = '2'
    },1050)

    setTimeout(function(){
      counter.textContent = '1'
    },2050)

    // Auto re start game
    setTimeout(function(){
      // Reset board
      board = ['','','','','','','','','',''];
      cells.forEach(cell => {
      cell.firstChild.textContent = '';
      isThereAWinner = false;
      counter.textContent = '';
      counter.setAttribute('style', 'display: none');
      })  
    }, 3050)
  }

  function weHaveAWinner() {
    console.log('Winner is Player', `${activePlayer}`);
    
    if (activePlayer == 1) {
      score.player1++;
      player1score.textContent = score.player1;
      // Check if is the winner out of 7
      if (score.player1 == 2) {
        textCell.forEach(cell => {
          cell.setAttribute('style', 'color: rgb(230, 230, 230)')
        })
        counter.setAttribute('style', 'display: block; font-size: 4.5rem; font-weight: 700; text-align: center');
        counter.textContent = 'Winner Player 1';
        setTimeout(function(){
          resetAfterWinner()
          textCell.forEach(cell => {
            cell.setAttribute('style', 'color: rgb(54, 54, 54)')
          })
          counter.textContent = '';
          counter.setAttribute('style', 'display: none');
        }, 4000)
      }
      // Sets for a new game
      else {
        autoRestart();
      }
    }
    
    if (activePlayer == 2) {
      score.player2++;
      player2score.textContent = score.player2;
      // Check if is the winner out of 7
      if (score.player2 == 2) {
        textCell.forEach(cell => {
          cell.setAttribute('style', 'color: rgb(230, 230, 230)')
        })
        counter.setAttribute('style', 'display: block; font-size: 4.5rem; font-weight: 700; text-align: center');
        counter.textContent = 'Winner Player 2';
        setTimeout(function(){
          resetAfterWinner()
          textCell.forEach(cell => {
            cell.setAttribute('style', 'color: rgb(54, 54, 54)')
          })
          counter.textContent = '';
          counter.setAttribute('style', 'display: none');
        }, 4000)
      }
      // Sets for a new game
      else {
        autoRestart();
      }
    }

    isThereAWinner = true;
    
    function resetAfterWinner() {
      console.log('Game is over, winner is Player', `${activePlayer}`);
      // Reset board
      board = ['','','','','','','','','',''];
      cells.forEach(cell => {
      cell.firstChild.textContent = '';
      isThereAWinner = false;
      score.player1 = 0;
      score.player2 = 0;
      player1score.textContent = '0';
      player2score.textContent = '0';
      })
      return
    }
  }
}

gameFlow();
