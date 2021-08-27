var box = document.querySelectorAll(".box");
for (var i = 0; i < box.length; i++){
  box[i].addEventListener('click', playerClick);
}
var containerX = [];
var containerCircle = [];
var playerCircle = "O";
var playerX = "X";
let whichPlayer = 0;
function playerClick(event){
  if (whichPlayer % 2 === 0) {
    containerX.push(Number(event.target.id));
    event.target.textContent = "X";
    winnerCheck(containerX);
    whichPlayer = whichPlayer + 1;
  }else {
    containerCircle.push(Number(event.target.id));
    event.target.textContent = "O";
    winnerCheck(containerCircle);
    whichPlayer = whichPlayer + 1;
  }
}
function winnerCheck(array){
  for (var i = 0; i < array.length; i++){
    if (array[i] === 0) {

    }
  }
  
}