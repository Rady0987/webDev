//Spread 

//In function calls
let minn = Math.min(1, 3, 5, 6, 4, 4, 3, 2, 320);

const nums = [1, 3, 5, 2, 66, 43, 32, 33, 109];
let maxNums = Math.max(...nums); //spreading with 3 dots
console.log(...nums);
console.log(...'StringSpread')

//In array combining 
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]; //spreading to combine 2 arrays

//In strings
const stringChr = [..."String"]; //each chr of the string becomes an element in the array

//In objects copy/combining
const dataFromForm = {
   email: "blueman@gmail.com",
   password: "bagpiciorul123",
   username: 'manblue2'
}

const newUser = { ...dataFromForm, dateOfBirth: "15.02.2000" }