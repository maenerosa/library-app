const library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
  this.getInfo = function () {
    return `${title} by ${author}, ${pages}, ${
      this.isRead ? "already read" : "not read yet"
    }`;
  };
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295);
book1.isRead = true;
library.push(book1);

const book2 = new Book("Nineteen Eighty Four", "George Orwell", 295);
library.push(book2);

console.log(library.forEach((book) => console.log(book.getInfo())));
