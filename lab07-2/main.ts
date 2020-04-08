let book: Item = new Book(1776, "Adam Smith", "The Nature and Cause of the Wealth of Nations");
book.display();

let movie: Item = new Movie(1992, "The Last of the Mohicans", "Michael Mann");
movie.display();


// tsc item.ts book.ts main.ts --outFile ../lab07-2/js/main.js
// node ../lab07-2/js/main.js

// tsc item.ts book.ts movie.ts main.ts --outFile ../lab07-2/js/main.js
// node ../lab07-2/js/main.js
