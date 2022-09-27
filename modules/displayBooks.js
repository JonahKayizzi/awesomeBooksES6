import createElementWithClassAndParent from './createHTMLelement.js';
import ourBooks from './Books.js';

const booksSection = document.querySelector('.books');

export default () => {
  booksSection.innerHTML = '';
  ourBooks.books.forEach((book, i) => {
    const bookDiv = createElementWithClassAndParent('tr', 'book', 'book', '', booksSection);
    createElementWithClassAndParent('td', 'title-author', 'title-author', `${book.title} by ${book.author}`, bookDiv);
    const buttonDiv = createElementWithClassAndParent('td', 'btn', 'btn', '', bookDiv);
    const deleteBtn = createElementWithClassAndParent('button', 'remove', `${i}`, 'Remove', buttonDiv);
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      ourBooks.removeBook(deleteBtn.id);
      bookDiv.remove();
    });
  });
};