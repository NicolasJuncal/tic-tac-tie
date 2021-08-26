var crossPositions = [0,1,2,3,4,5,6,7,8];
var box = document.querySelectorAll('.box');
var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var enter = document.querySelector('.enter');
var playAgain = document.querySelector('.play-again');
var name1 = document.querySelector('.name1');
var name2 = document.querySelector('.name2');
var playerTurn = document.querySelector('.player-turn');
enter.addEventListener('click', getInfo);
playAgain.addEventListener('click', resetGame);
var score1 = document.querySelector('.score-name1');
var score2 = document.querySelector('.score-name2');
var messageUser = document.querySelector('.message-user');
var hiddenTurn = document.querySelector('.turn');

function getInfo(){
  messageUser.className = "message-user";
  name1.textContent = input1.value + " Player 1";
  name2.textContent = input2.value + " Player 2";
  score1.textContent = 0; 
  score2.textContent = 0;
  scoreName1 = 0;
  scoreName2 = 0;
  resetGame();
  hiddenTurn.style.color = "black";

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
    event.target.style.color = 'rgb(70, 152, 30)';
    event.target.style.backgroundColor = '#dadadaa6';
    event.target.textContent = 'X';
    whichPlayer = whichPlayer + 1;
    playerTurn.textContent = input2.value;
    event.target.removeEventListener('click', playerClick);
  }else {
    crossPositions[idPosition] = 'O';
    event.target.style.color = 'red';
    event.target.style.backgroundColor = '#dadadaa6';
    event.target.textContent = 'O';
    whichPlayer = whichPlayer + 1;
    playerTurn.textContent = input1.value;
    event.target.removeEventListener('click', playerClick);
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
	for (var i = 0; i < 7; i += 3) {
		if (crossPositions[i] == 'X' && crossPositions[i + 1] == 'X' && crossPositions[i + 2] == 'X') { 
      messageUser.className = "player1";
			messageUser.textContent = name1.textContent + " wins!!!";
      scoreName1 = scoreName1 + 1;
      score1.textContent = scoreName1;
      noMoreClicks();
      
		}
		if (crossPositions[i] == 'O' && crossPositions[i + 1] == 'O' && crossPositions[i + 2] == 'O') {
      messageUser.className = "player2";
		  messageUser.textContent = name2.textContent + " wins!!!";
      scoreName2 = scoreName2 + 1;
      score2.textContent = scoreName2;
      noMoreClicks();
     
		}
	}
}

function columnCheck() {
	for (var i = 0; i < 3; i++) {
		if (crossPositions[i] == 'X' && crossPositions[i + 3] == 'X' && crossPositions[i + 6] == 'X') { 
      messageUser.className = "player1";
			messageUser.textContent = name1.textContent + " wins!!!";
      scoreName1 = scoreName1 + 1;
      score1.textContent = scoreName1;
      noMoreClicks();
     
		}
		if (crossPositions[i] == 'O' && crossPositions[i + 3] == 'O' && crossPositions[i + 6] == 'O') {
      messageUser.className = "player2";
			messageUser.textContent = name2.textContent + " wins!!!";
      scoreName2 = scoreName2 + 1;
      score2.textContent = scoreName2;
      noMoreClicks();
      
		}
	}
}

function diagonalCheck() {
	if ( (crossPositions[0] == 'X' && crossPositions[4] == 'X' && crossPositions[8] == 'X') || (crossPositions[2] == 'X' && crossPositions[4] == 'X' && crossPositions[6] == 'X') ) {
    messageUser.className = "player1";
    messageUser.textContent = name1.textContent + " wins!!!";
    scoreName1 = scoreName1 + 1;
    score1.textContent = scoreName1;
    noMoreClicks();
   
	}else if ( (crossPositions[0] == 'O' && crossPositions[4] == 'O' && crossPositions[8] == 'O') || (crossPositions[2] == 'O' && crossPositions[4] == 'O' && crossPositions[6] == 'O') ) {
    messageUser.className = "player2";
	  messageUser.textContent = name2.textContent + " wins!!!";
    scoreName2 = scoreName2 + 1;
    score2.textContent = scoreName2;
    noMoreClicks();
   
	} 
}

function gameDraw(){
  if (whichPlayer === 9) {
    messageUser.className = "message-user";
    messageUser.textContent = "It is a draw! No points this time";
    noMoreClicks();
   
  }
}

function resetGame(){
  crossPositions = [0,1,2,3,4,5,6,7,8];
  whichPlayer = 0;
  playerTurn.textContent = input1.value;
  for (var i = 0; i < box.length; i++){
    box[i].textContent = '';
    box[i].style.backgroundColor = 'rgb(244, 241, 231)';
  }
  messageUser.className = "message-user";
  messageUser.textContent = "";
  for (var i = 0; i < box.length; i++){
    box[i].addEventListener('click', playerClick);
  }
}
function noMoreClicks(){
  for (var i = 0; i < box.length; i++){
    box[i].removeEventListener('click', playerClick);
  } 
}