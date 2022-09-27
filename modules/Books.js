import Book from "./Book.js";

class Books {
    constructor() {
      this.books = [];
    }

    addBook = (title, author) => {
      const storedBooks = JSON.parse(window.localStorage.getItem('storedBooks'));
      this.books = (storedBooks) || [];
      const newBook = new Book(title, author);
      this.books.push(newBook);
      localStorage.setItem('storedBooks', JSON.stringify(this.books));
      return this;
    }

    removeBook = (bookId) => {
      this.books = this.books.filter((element, i) => {
        if (i === parseInt(bookId, 10)) {
          return false;
        }
        return true;
      });
      localStorage.setItem('storedBooks', JSON.stringify(this.books));
    }
  }

  const ourBooks = new Books();

  export default ourBooks;