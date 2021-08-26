var crossPositions = [0,1,2,3,4,5,6,7,8];
var box = document.querySelectorAll('.box');
var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var enter = document.querySelector('.enter');
var name1 = document.querySelector('.name1');
var name2 = document.querySelector('.name2');
var playerTurn = document.querySelector('.player-turn');
enter.addEventListener('click', getInfo);
var score1 = document.querySelector('.score-name1');
var score2 = document.querySelector('.score-name2');

function getInfo(){
  name1.textContent = input1.value + " 'X' Player";
  name2.textContent = input2.value + " 'O' Player";
}
var whichPlayer = 0;
var scoreName1 = 0;
var scoreName2 = 0;

for (var i = 0; i < box.length; i++){
  box[i].addEventListener('click', playerClick);
}

function playerClick(event){
  var idPosition = Number(event.target.id)
  if (whichPlayer % 2 === 0) {
    crossPositions[idPosition] = 'X';
    event.target.textContent = 'X';
    whichPlayer = whichPlayer + 1;
    playerTurn.textContent = "O";
  }else {
    crossPositions[idPosition] = 'O';
    event.target.textContent = 'O';
    whichPlayer = whichPlayer + 1;
    playerTurn.textContent = "X";
  }
  gameDraw();
  winnerCheck();
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
      scoreName1 = scoreName1 + 1;
      score1.textContent = scoreName1;
      resetGame();
		}
		if (crossPositions[i] == 'O' && crossPositions[i + 1] == 'O' && crossPositions[i + 2] == 'O') {
		  alert ('O' + ' wins!!!');
      scoreName2 = scoreName2 + 1;
      score2.textContent = scoreName2;
      resetGame();
		}
	}
}

function columnCheck() {
	for( var i = 0; i < 3; i++) {
		if (crossPositions[i] == 'X' && crossPositions[i + 3] == 'X' && crossPositions[i + 6] == 'X') { 
			alert ('X' + ' wins!!!');
      scoreName1 = scoreName1 + 1;
      score1.textContent = scoreName1;
      resetGame();
		}
		if (crossPositions[i] == 'O' && crossPositions[i + 3] == 'O' && crossPositions[i + 6] == 'O') {
			alert ('O' + ' wins!!!');
      scoreName2 = scoreName2 + 1;
      score2.textContent = scoreName2;
      resetGame();
		}
	}
}

function diagonalCheck() {
	if ( (crossPositions[0] == 'X' && crossPositions[4] == 'X' && crossPositions[8] == 'X') || (crossPositions[2] == 'X' && crossPositions[4] == 'X' && crossPositions[6] == 'X') ) {
		alert ('X' + ' wins!!!');
    scoreName1 = scoreName1 + 1;
    score1.textContent = scoreName1;
    resetGame();
	}else if ( (crossPositions[0] == 'O' && crossPositions[4] == 'O' && crossPositions[8] == 'O') || (crossPositions[2] == 'O' && crossPositions[4] == 'O' && crossPositions[6] == 'O') ) {
	  alert ('O' + ' wins!!!');
    scoreName2 = scoreName2 + 1;
    score2.textContent = scoreName2;
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
  playerTurn.textContent = "X";
  for (var i = 0; i < box.length; i++){
    box[i].textContent = '';
  }
}