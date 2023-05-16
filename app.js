'use strict';
let score = 0;
let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Let us play a guessing game, please answer yes/no or y/n`);

function firstQuestion() {
  let questionOneGuess = prompt('Was I born in the United States?').toLowerCase();
  if (questionOneGuess === 'n' || questionOneGuess === 'no') {
    alert('You are correct!');
    score++;
  } else if (questionOneGuess === 'y' || questionOneGuess === 'yes') {
    alert('Sorry, you are incorrect.');
  }
  else {
    alert('Please answer yes/no or y/n');
  }
}

function secondQuestion() {
  let questionTwoGuess = prompt('Am I a father?').toLowerCase();
  if (questionTwoGuess === 'y' || questionTwoGuess === 'yes') {
    alert('You are correct!');
    score++;
  } else if (questionTwoGuess === 'n' || questionTwoGuess === 'no') {
    alert('Sorry, you are incorrect');
  }
  else {
    alert('Please answer yes/no or y/n');
  }
}

function thirdQuestion() {
  let questionThreeGuess = prompt('Did I serve or am I still in the Armed Forces?').toLowerCase();
  if (questionThreeGuess === 'y' || questionThreeGuess === 'yes') {
    //console.log('You are correct!');
    alert('You are correct!');
    score++;
  } else if (questionThreeGuess === 'n' || questionThreeGuess === 'no') {
    alert('Sorry, you are incorrect');
  }
  else {
    alert('Please answer yes/no or y/n');
  }
}

function fourthQuestion() {
  let questionFourGuess = prompt('Did I major in computer science?').toLowerCase();
  if (questionFourGuess === 'n' || questionFourGuess === 'no') {
    //console.log('You are correct!');
    alert('You are correct!');
    score++;
  } else if (questionFourGuess === 'y' || questionFourGuess === 'yes') {
    alert('Sorry, you are incorrect');
  }
  else {
    alert('Please answer yes/no or y/n');
  }
}

function fifthQuestion() {
  let questionFiveGuess = prompt('Do I like soccer?').toLowerCase();
  if (questionFiveGuess === 'y' || questionFiveGuess === 'yes') {
    //console.log('You are correct!');
    alert('You are correct!');
    score++;
  } else if (questionFiveGuess === 'n' || questionFiveGuess === 'no') {
    alert('Sorry, you are incorrect');
  }
  else {
    alert('Please answer yes/no or y/n');
  }
}


function sixthQuestion() {
  let correctGuess = 10;
  let totalGuesses = 4;
  let questionSixGuess;

  for (let i = 0; i < totalGuesses; i++) {
    questionSixGuess = prompt('Lets play a game, guess my favorite number!');
    if (questionSixGuess < correctGuess) {
      alert(`Too low! You have ${totalGuesses - i - 1} guesses left!`);
    } else if (questionSixGuess > correctGuess) {
      alert(`Too high! You have ${totalGuesses - i - 1} guesses left!`);
    } else {
      alert(`Congratulations, you got it! The correct answer is ${correctGuess}.`);
      score++;
      return;
    }
    alert(`Sorry, you didn't get it. The correct answer is ${correctGuess}.`);
  }

  function seventhQuestion() {
    let totalGuesses = 6;
    let questionSevenAnswer = ['kale', 'spinach', 'microgreens', 'collard', 'arugula', 'cabbage', 'bok choy'];
    let questionSevenGuess;

    while (totalGuesses > 0) {
      questionSevenGuess = prompt('Can you name a leafy green I like to eat?').toLowerCase();
      totalGuesses--;
if (questionSevenAnswer.includes(questionSevenGuess)){
  alert('That is correct!');
  score++
  return+
} else if (totalGuesses > 0) {
  alert(`Guess again! You have ${totalGuesses} guesses left.`);
}
alert('Sorry, you are all out of guesses! The possible answers were: ${questionSevenAnswer.join(', ')}');
}
alert(`You got ${score} questions correct out of 7!`);


  firstQuestion();
  secondQuestion();
  thirdQuestion();
  fourthQuestion();
  fifthQuestion();
  sixthQuestion();
  seventhQuestion();

  alert(`You got ${score} questions correct!`);