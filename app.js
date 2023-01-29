let userPoints = 0;

alert("Hi , welcome to my guessing game .");

let user = prompt("What is your name ?");

// ensure the user ACTUALLY gives their name
while (!user) {
  user = prompt("It will be really great if i can have your name .");
}

// lament at Ronald
if (user == "John" || user == "john") {
  alert("uhh , I knew it was you ");
} else {
  alert("Hello there " + user + "! I'm so glad you decided to join me!");
}

// question one
function foodQuestion() {
  let Question1 = prompt("What is one my favourite foods ?.").toLowerCase();

  let foodILike = ["pizza ", "steak", "chinese", "soup"];

  for (let i = 0; i < foodILike.length; i++) {
    if (Question1 == foodILike[i]) {
      alert("Yes I love " + Question1 + "!");
      userPoints++;
    }
  }
}

// question two
function footballQuestion() {
  let Question2 = confirm("What do you think ,do I support Liverpool?");

  if (Question2 == true) {
    alert("Amazing!.");
    userPoints++;
  } else {
    alert("Common ...");
  }
}
function stadiumQuestion() {
  let Question3 = confirm("Do i go the matches  ?");

  if (Question3 == true) {
    alert("Indeed.");
    userPoints++;
  } else {
    alert("I tought you started to know me .");
  }
}
function musicQuestion() {
  let Question4 = prompt(
    "What is one my favourite music bands?."
  ).toLowerCase();

  let bandsIlike = ["Keane", "Cold Play ", "U2"];

  for (let i = 0; i < bandsIlike.length; i++) {
    if (Question4 == bandsIlike[i]) {
      alert(Question4 + " is peak.");
      userPoints++;
    }
  }
}
function danceQuestion() {
  let Question5 = confirm("What do you think ,  do i like traveling? ");

  if (Question5 == true) {
    alert("Brilliant ! ");
    userPoints++;
  } else {
    alert("ohh noo");
  }
}
function guessQuestion() {
  let guessQuestion = prompt(
    "what number between 10 and 30 am i thinking at, you can have 4 guesses . "
  );
  let attempts = 4;
  while (attempts > 0) {
    // if incorrect
    if (guessQuestion > 13) {
      alert("try lower " + attempts + " attempts left ");
      --attempts;
      guessQuestion = prompt("what number between 10 and 30 am i thinking of?");
    } else if (guessQuestion < 13) {
      alert("try a higher number " + attempts + " attempts left ");
      --attempts;
      guessQuestion = prompt("what number between 10 and 30 am i thinking of?");
    } else if (guessQuestion == 13) {
      // if correct
      alert("nice, thats my number ");
      attempts = 0;
    }
  }
}
function guessQ() {
  let question = prompt("What sport do I like ?");

  let answers = ["football", "pool", "tennis", "ping pong", "basketball"];
  let attempts = 5;

  while (attempts > 0) {
    for (let i = 0; i < answers.length; i++) {
      if (question == answers[i]) {
        alert("Great, that`s a great sport ");
        attempts = 0;
      }
    }
    if (attempts > 0) {
      question = prompt("I don`t really like that sport.");
      attempts--;
    }
  }
}

guessQuestion();
guessQ();
foodQuestion();
footballQuestion();
stadiumQuestion();
musicQuestion();
danceQuestion();
alert("Well done " + user + "! You scored " + userPoints + "/7");
