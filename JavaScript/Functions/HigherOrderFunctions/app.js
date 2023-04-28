function makeBetweenFunc(min, max) {
   return function (num) {
      return (num <= max && num >= min);
   }
}

