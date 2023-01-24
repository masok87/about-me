"use strict";




let question1 = confirm("You ready to RUUUUMBLE!?");

if (question1 == true) {
  alert("LET'S GET READY TO RUMBLLLLLLLE!");
} else {
  alert("Ah well.");
}

let colour = prompt("What is your favourite colour?");

switch (colour.toLowerCase()) {
  case "red":
    alert("Your favourite colour was red. Gross.");
    break;
  case "green":
    alert("Nice. Good choice.");
    break;
  default:
    alert("Pretty sure that colour doesn't exist. Have you thought about red or green? ¯\\_(ツ)_/¯");
}
let question2 = confirm("Do you like football?");
if (question2 == true) {
  alert("Let`s go and play !");} else {
    alert("Wasn`t expecting that!!! ")
  }
  let question3 = confirm("Do you like  Liverpool Fc ?"); if (question3 == true) {
    alert("Up the Reds!!!");
  } else {
    alert("Sad to hear that ");
  }
  let question4 = confirm("Have you ever been on Anfield ?"); if (question4 == true ) { 
    alert("Awesome!!!");
  } else {
    alert("You should go at least once !");
  }