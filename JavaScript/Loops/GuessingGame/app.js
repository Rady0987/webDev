
let maxNumber = parseInt(prompt('Welcome! Enter your max number:'));

while (!maxNumber) {
   maxNumber = parseInt(prompt('Please, enter a valid number:'))
}

let goal = Math.floor(Math.random() * maxNumber) + 1;
let counter = 0;
let guess = parseInt(prompt("Enter your first guess:"));
while (parseInt(guess) !== goal) {

   if (guess === 'q') {
      console.log(`Your number was ${goal}`);
      break;
   }
   counter++;

   if (guess < goal) {
      guess = prompt("Too low. Guess again!");
   } else {
      guess = prompt("Too high. Guess again!");
   }
}

if (parseInt(guess) === goal) {
   console.log(`It took you ${counter} guesses, the number was ${goal}`);
} else {
   console.log(`Ok, you quit! The number is ${goal}`);
}
