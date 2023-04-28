function yell(message) {
   try {
      console.log(message.toUpperCase().repeat(3));
   } catch (error) {
      console.log("Please pass a string!");
   }
}