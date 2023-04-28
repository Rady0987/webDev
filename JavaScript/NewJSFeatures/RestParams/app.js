function sum() {
   //This does not work as arguments does not have full array functionality
   return arguments.reduce((sum, cur) => sum + cur);
}

//A better approach
function sum(...nums) {
   return nums.reduce((sum, current) => sum + current)
}

//pick the REST (remaining) arguments

function raceResults(gold, silver, ...everoneElse) {
   console.log(`Gold medal goes to ${gold}`);
   console.log(`Silver medal goes to ${silver}`);
   console.log(`And thanks to everyone else: ${everoneElse}`);

}



