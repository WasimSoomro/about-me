'use strict';

console.log('Test');


let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Let us play a guessing game, please answer yes/no or y/n`);

let questionOneGuess = prompt('Was I born in the United States?').toLowerCase();

if(questionOneGuess === 'n' || questionOneGuess === 'no'){
  //console.log('You are correct!');
  alert('You are correct!');
} else if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  alert('Sorry, you are incorrect.');
}
  else {
    alert('Please answer yes/no or y/n');
  }

let questionTwoGuess = prompt('Am I a father?').toLowerCase();

if(questionTwoGuess === 'y' || questionTwoGuess === 'yes'){
    //console.log('You are correct!');
  alert('You are correct!');
} else if(questionTwoGuess === 'n' || questionOneGuess === 'no'){
  alert('Sorry, you are incorrect');
}
else {
  alert('Please answer yes/no or y/n');
}

let questionThreeGuess = prompt('Did I serve or am I still in the Armed Forces?').toLowerCase();

if(questionThreeGuess === 'y' || questionThreeGuess === 'yes'){
    //console.log('You are correct!');
  alert('You are correct!');
} else if(questionThreeGuess === 'n' || questionThreeGuess === 'no'){
  alert('Sorry, you are incorrect');
}
else {
    alert('Please answer yes/no or y/n');
  }

  let questionFourGuess = prompt('Did I major in computer science?').toLowerCase();

  if(questionFourGuess === 'n' || questionFourGuess === 'no'){
      //console.log('You are correct!');
    alert('You are correct!');
  } else if(questionFourGuess === 'y' || questionFourGuess === 'yes'){
    alert('Sorry, you are incorrect');
  }
  else {
      alert('Please answer yes/no or y/n');
    }
  
    let questionFiveGuess = prompt('Do I like soccer?').toLowerCase();

    if(questionFiveGuess === 'y' || questionFiveGuess === 'yes'){
        //console.log('You are correct!');
      alert('You are correct!');
    } else if(questionFiveGuess === 'n' || questionFiveGuess === 'no'){
      alert('Sorry, you are incorrect');
    }
    else {
        alert('Please answer yes/no or y/n');
      }
    
      
