
let input = prompt("What would you like to do?");

const toDoList = [];

while (input !== "quit") {
   switch (input) {
      case "new":
         input = prompt("Enter a new Todo:")
         toDoList.push(input);
         console.log(`${input} added to the list`);
         break;

      case "list":
         console.log("**********");
         for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}`);
         }
         console.log("**********");
         break;

      case "delete":
         input = parseInt(prompt("Enter index of the Todo to delete:"));
         if (Number.isNaN(input)) {
            console.log("Not a valid index!");
         } else if (input >= toDoList.length || input < 0) {
            console.log("Index out of bounds!");
         } else {
            toDoList.splice(input, 1);
            console.log("Todo removed");
         }
         break;

   }
   input = prompt("What would you like to do?");
}
console.log("You quit the app!");