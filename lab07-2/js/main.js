var Book = /** @class */ (function () {
    function Book(year, author, title) {
        this.year = year;
        this.author = author;
        this.title = title;
    }
    Book.prototype.display = function () {
        console.log(this.year + ", " + this.author + ", \"" + this.title + "\"");
    };
    return Book;
}());
var Movie = /** @class */ (function () {
    function Movie(year, director, title) {
        this.year = year;
        this.director = director;
        this.title = title;
    }
    Movie.prototype.display = function () {
        console.log(this.year + ", " + this.director + ", \"" + this.title + "\"");
    };
    return Movie;
}());
var book = new Book(1776, "Adam Smith", "The Nature and Cause of the Wealth of Nations");
book.display();
var movie = new Movie(1992, "The Last of the Mohicans", "Michael Mann");
movie.display();
// tsc item.ts book.ts main.ts --outFile ../lab07-2/js/main.js
// node ../lab07-2/js/main.js
// tsc item.ts book.ts movie.ts main.ts --outFile ../lab07-2/js/main.js
// node ../lab07-2/js/main.js
