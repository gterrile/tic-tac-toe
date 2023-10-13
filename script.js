const computer = document.getElementById('computer');
const player2 = document.getElementById('player2');
const gameTypeBtnList = document.querySelectorAll('.game-type');
const landingContainer = document.getElementById('landing-container');

gameTypeBtnList.forEach(function(button) {
  button.addEventListener('click', function() {
    console.log('click');
    landingContainer.setAttribute('style', 'display: none');
  })
})


