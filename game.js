// function gameBoard() {
//   const boardContainer = document.getElementById('boardContainer');
  
//   // Create board cells and append them to container
//   for (i = 1; i <= 9; i++) {
//     const cell = document.createElement('div');
//     cell.classList.add('boardCell');
//     cell.setAttribute('id', `${i}`)
//     const textCell = document.createElement('span');
//     textCell.classList.add('textCell');
//     cell.appendChild(textCell);
//     boardContainer.appendChild(cell);
//   }
// }

function gameFlow() {
  // Create Board
  //gameBoard();

  // Define variables
  let board = ['','','','','','','','','',''];
  const cells = document.querySelectorAll('.boardCell');
  let isThereAWinner = false;
  const startGame = document.getElementById('startGame');
  let score = {
    player1: 0,
    player2: 0
  }

  console.log('New Game Started');



  // Restart game
  startGame.addEventListener('click', function() {
    // Reset board
    board = ['','','','','','','','','',''];
    cells.forEach(cell => {
    cell.firstChild.textContent = '';
    isThereAWinner = false;
  })
  });

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

  function weHaveAWinner() {
    console.log('Winner is Player', `${activePlayer}`);
    if (activePlayer == 1) {
      score.player1++
    }
    else {
      score.player2++
    }
    console.log('Current Score', score)
    isThereAWinner = true;
  }
}

gameFlow();
