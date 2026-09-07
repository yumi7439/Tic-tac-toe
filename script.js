//stores all the <button> elements in the buttons variable
let buttons = document.getElementsByTagName("button");
console.log(buttons)
//need to store the h1 element with ID 'turn' to show the user
//who's turn it currently is
let currTurnHeading = document.getElementById("turn");

//for loop adds an eventListener to each button
for (let i = 0; i < buttons.length; i++) {
  let currButton = buttons[i];
  currButton.addEventListener("click", buttonPressed);
}
//need to keep track of the currentPlayer
let currPlayer = "X";

//need to keep track of the number of clicks
let numClicks = 0;

function disableAllButtons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].removeEventListener("click", buttonPressed);
  }
}
function buttonPressed(event) 
  {let pressedButton =event.target;
  //mark the button that was clicked with whoever's turn it is
  //AKA -> change the innerText of that button to match currPlayer
  let winner= currPlayer;
  if (currPlayer == "X") {
    pressedButton.innerText = "X";
    currPlayer = "O";
    currTurnHeading.innerText = "O's turn";
  } else {
    pressedButton.innerText = "O";
    currPlayer = "X";
    currTurnHeading.innerText = "X's turn";
  }
  pressedButton.removeEventListener("click",buttonPressed)
  numClicks++;

  if (isThereAWinner()){currTurnHeading.innerText = winner +" wins!";
  disableAllButtons();
}
else if (numClicks==9) {currTurnHeading.innerText="Tie!";}
}
function isThereAWinner() {
 //this function should return true if there is a current
  //winning play on the board

  //the first one is completed for you, you must fill in the rest
  if (buttons[0].innerText == buttons[1].innerText && buttons[0].innerText == buttons[2].innerText&&buttons[0].innerText!="") {
    return true;
  } 
  
  if (buttons[3].innerText == buttons[4].innerText && buttons[3].innerText == buttons[5].innerText&&buttons[3].innerText!="") {
    return true;
  } 
  
  if (buttons[6].innerText == buttons[7].innerText && buttons[6].innerText == buttons[8].innerText&&buttons[6].innerText!="") {
    return true;
  } 
  if (buttons[0].innerText == buttons[3].innerText && buttons[0].innerText == buttons[6].innerText&&buttons[0].innerText!="") {
    return true;
  } 
  if (buttons[1].innerText == buttons[4].innerText && buttons[1].innerText == buttons[7].innerText&&buttons[1].innerText!="") {
    return true;
  } 
  if (buttons[2].innerText == buttons[5].innerText && buttons[2].innerText == buttons[8].innerText&&buttons[2].innerText!="") { 
    return true;
  }
  if (buttons[0].innerText == buttons[4].innerText && buttons[0].innerText == buttons[8].innerText&&buttons[0].innerText!="") {
    return true;
  }
   if (buttons[2].innerText == buttons[4].innerText && buttons[2].innerText == buttons[6].innerText&&buttons[2].innerText!="") {
    return true;
  } else {
    return false;
  }  
   } 
