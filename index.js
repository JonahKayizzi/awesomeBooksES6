import ourBooks from './modules/Books.js';
import displayBooks from './modules/displayBooks.js';
import {displayBookList, displayBookForm, displayContactInfo} from './modules/toggleNav.js' 

window.onload = () => {
    const addBookbtn = document.querySelector('.add-btn');
     
    addBookbtn.addEventListener('click', (e) => {
      e.preventDefault();
      const titleInput = document.querySelector('.title-input');
      const authorInput = document.querySelector('.author-input');
      ourBooks.addBook(titleInput.value, authorInput.value);
      displayBooks();
      titleInput.value = '';
      authorInput.value = '';
    });
    
    const preStoredBooks = JSON.parse(window.localStorage.getItem('storedBooks'));
    if (preStoredBooks) {
      ourBooks.books = preStoredBooks;
      displayBooks();
    }
};
    