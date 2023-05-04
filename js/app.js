'use strict';
let score = 0;
let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Let us play a guessing game, please answer yes/no or y/n`);

function firstQuestion() {
  let questionOneGuess = prompt('Was I born in the United States?').toLowerCase();
  if (questionOneGuess === 'n' || questionOneGuess === 'no') {
    //console.log('You are correct!');
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
    //console.log('You are correct!');
    alert('You are correct!');
    score++;
  } else if (questionTwoGuess === 'n' || questionOneGuess === 'no') {
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
  let questionSixGuess = prompt('Lets play a game, guess my favorite number!');
  while (questionSixGuess != correctGuess && totalGuesses > 0) {
    totalGuesses--;
    if (questionSixGuess < correctGuess) {
      alert(`Too low! You have ${totalGuesses} guesses left!`);
    } else if (questionSixGuess > correctGuess) {
      alert(`Too high! You have ${totalGuesses} guesses left!`);
    } else {
      alert(`Please guess a number. You just wasted a guess. You now have ${totalGuesses} guesses remaining.`);
    }
    questionSixGuess = prompt('Guess again!');
  }
  if (questionSixGuess == correctGuess) {
    alert('Yay, nice job!');
    score++;
  }
}

function seventhQuestion() {
  let totalGuesses2 = 6;
  let questionSevenAnswer = ['kale', 'spinach', 'microgreens', 'collard', 'arugula', 'cabbage', 'bok choy'];
  let questionSevenGuess;
  Q7: while (totalGuesses2 > 0) {
    questionSevenGuess = prompt('Can you name a leafy green I like to eat?').toLowerCase();
    totalGuesses2--;

    for (let i = 0; i < questionSevenAnswer.length; i++) {
      if (questionSevenGuess === questionSevenAnswer[i]) {
        alert(`That is correct!`);
        score++;
        break Q7;
      } else if (totalGuesses2 > 0 && questionSevenGuess !== questionSevenAnswer[i]) {
        prompt(`Guess again! You have ${totalGuesses2} guesses left`);
      }
    }
    if (totalGuesses2 === 0) {
      alert('Sorry, you are all out of guesses!');
    }
  }
  for (let i = 0; i < questionSevenAnswer.length; i++) {
    alert(`Here were the possible answers ${questionSevenAnswer[i]}`);
  }
  alert(`You got ${score} questions correct!`);
}

<<<<<<< HEAD
alert(`You got ${score} questions correct!`);


let letters = ['a', 'b', 'c', 'd'];

for(let attempts = 6; attempts > 0; attempts--){
let lettersGuess = prompt("guess a letter!';")

for(let i=0; i < letters.length; i++){
 if(lettersGuess === letters[i]){
  alert('Wow, great guess!');
  attempts = 0;
  break;
 } 
}

}
alert(`Here are four letters: ${letters}`);
=======
firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();
seventhQuestion();
>>>>>>> f09ec5259793756b1f16f6293ce3fbe9a0f6d939
