var crossPositions = [0,1,2,3,4,5,6,7,8];
var box = document.querySelectorAll('.box');
var playerCircle = 'O';
var playerX = 'X';
var whichPlayer = 0;

for (var i = 0; i < box.length; i++){
  box[i].addEventListener('click', playerClick);
}

function playerClick(event){
  var idPosition = Number(event.target.id)
  if (whichPlayer % 2 === 0) {
    crossPositions[idPosition] = 'X';
    event.target.textContent = 'X';
    whichPlayer = whichPlayer + 1;
    winnerCheck();
    
  }else {
    crossPositions[idPosition] = 'O';
    event.target.textContent = 'O';
    whichPlayer = whichPlayer + 1;
    winnerCheck();
  }
  gameDraw();
}
		
function winnerCheck(){
  horizontalCheck();
  columnCheck();
  diagonalCheck();
  gameDraw();
}

function horizontalCheck() {
	for( var i = 0; i < 7; i += 3) {
		if (crossPositions[i] == 'X' && crossPositions[i + 1] == 'X' && crossPositions[i + 2] == 'X') { 
			alert ( 'X' + ' wins!!!');
      resetGame();
		}
		if (crossPositions[i] == 'O' && crossPositions[i + 1] == 'O' && crossPositions[i + 2] == 'O') {
		  alert ('O' + ' wins!!!');
      resetGame();
		}
	}
}

function columnCheck() {
	for( var i = 0; i < 3; i++) {
		if (crossPositions[i] == 'X' && crossPositions[i + 3] == 'X' && crossPositions[i + 6] == 'X') { 
			alert ('X' + ' wins!!!');
      resetGame();
		}
		if (crossPositions[i] == 'O' && crossPositions[i + 3] == 'O' && crossPositions[i + 6] == 'O') {
			alert ('O' + ' wins!!!');
      resetGame();
		}
	}
}

function diagonalCheck() {
	if ( (crossPositions[0] == 'X' && crossPositions[4] == 'X' && crossPositions[8] == 'X') || (crossPositions[2] == 'X' && crossPositions[4] == 'X' && crossPositions[6] == 'X') ) {
		alert ('X' + ' wins!!!');
    resetGame();
	}else if ( (crossPositions[0] == 'O' && crossPositions[4] == 'O' && crossPositions[8] == 'O') || (crossPositions[2] == 'O' && crossPositions[4] == 'O' && crossPositions[6] == 'O') ) {
	  alert ('O' + ' wins!!!');
    resetGame();
	} 
}
function gameDraw(){
  if (whichPlayer === 9) {
    alert('Game is draw');
    resetGame();
  }
}

function resetGame(){
  crossPositions = [0,1,2,3,4,5,6,7,8];
  whichPlayer = 0;
  for (var i = 0; i < box.length; i++){
    box[i].textContent = '';
  }
}