"use strict";

let question1 = confirm("You ready to RUUUUMBLE!?");

if (question1 == true) {
  console.log("LET'S GET READY TO RUMBLLLLLLLE!");
} else {
  console.log("Ah well.");
}

let colour = prompt("What is your favourite colour?");



switch (colour.toLowerCase()) {
  case "red":
    console.log("Your favourite colour was red. Gross.");
    break;
  case "green":
    console.log("Nice. Good choice.");
    break;
  default:
    console.log("Pretty sure that colour doesn't exist. Have you thought about red or green? ¯\\_(ツ)_/¯");
}