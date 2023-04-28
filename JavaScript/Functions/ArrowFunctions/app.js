// all functions are defined using const because we dont expect to reasing the square or add functions

const add = (x, y) => {
   return x + y;
}

const rollDice = () => {
   return Math.floor(Math.random() * 6) + 1;
}

// In case of only one argument, it is possbile to remove the paranthesis
const square = x => {
   return x * x;
}

const greet = name => {
   return `Hey ${name}!`;
}