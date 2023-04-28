const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// numbers.forEach(function (number) {
//    if (number % 2 === 0) {
//       console.log(number);
//    }
// });

const lessThanFour = numbers.filter(n => (n < 4))

const lessThanTen = numbers.filter(n => {
   return n <= 10;
});

const movies = [
   {
      title: 'Amadeus',
      score: 99,
      year: 1984
   },
   {
      title: 'Sharknado',
      score: 35,
      year: 2013
   },
   {
      title: '13 Going On 30',
      score: 70,
      year: 2004
   },
   {
      title: 'Stand By Me',
      score: 85,
      year: 1986
   },
   {
      title: 'Waterworld',
      score: 62,
      year: 1995
   },
   {
      title: 'Jingle All The Way',
      score: 71,
      year: 1996
   },
   {
      title: 'Parasite',
      score: 95,
      year: 2019
   },
   {
      title: 'Notting Hill',
      score: 77,
      year: 1999
   },
   {
      title: 'Alien',
      score: 90,
      year: 1979
   }
]


// movies.forEach(function (movie) {
//    console.log(`${movie.title} - ${movie.score}/100`)
// })

//Map
const titles = movies.map(function (movie) {
   return movie.title;
})

const score = movies.map(movie => (`${movie.title} - ${movie.score}/100`))

//Filter
const goodMovies = movies.filter(movie => (movie.score >= 80))
const badMovies = movies.filter(movie => movie.score < 80)

//Chain multiple array methods
const goodMoviesTitle = movies.filter(movie => movie.score >= 80).map(movie => movie.title)

//Some
movies.some(movie => movie.year > 2015)

//Every
const allEvens = numbers => numbers.every(number => number % 2 === 0)



const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

//Reduce

let sumArray = [1, 2, 5, 6, 8].reduce((accumulator, currentValue) => accumulator + currentValue);

let maxPrice = prices.reduce((max, current) => {
   if (current > max) {
      return current;
   }
   return max;
})

let highestRatedMovie = movies.reduce((high, current) => {
   if (current.score > high.score) {
      return current;
   }
   return high;
})