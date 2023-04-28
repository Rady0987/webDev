////methods

const myMath = {
   PI: 3.14159,
   square: function (num) {
      return num * num;
   },
   cube: function (num) {
      return num ** 3;
   }

}

//shortcut

const myMathShort = {
   PI: 3.14159,
   square(num) {
      return num * num;
   },
   cube(num) {
      return num ** 3;
   }
}

//object + this usage

const cat = {
   name: "MitCat",
   sound() {
      console.log(this.name + ": meau")
   }

}