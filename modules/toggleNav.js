const bookTable = document.querySelector('.books-table');
const header = document.getElementsByTagName('h1');
const form = document.querySelector('.add-book');
const contact = document.querySelector('.contact');

const displayBookList = (() => {
    bookTable.classList.add('mid-section');
    bookTable.classList.remove('hdn');
    form.classList.remove('mid-section');
    form.classList.add('hdn');
    contact.classList.remove('mid-section');
    contact.classList.add('hdn');
    header[0].textContent = 'All awesome Books';
  });
  
  const displayBookForm = (() => {
    bookTable.classList.remove('mid-section');
    bookTable.classList.add('hdn');
    form.classList.add('mid-section');
    form.classList.remove('hdn');
    contact.classList.remove('mid-section');
    contact.classList.add('hdn');
    header[0].textContent = 'Add a New Book';
  });
  
  const displayContactInfo = (() => {
    bookTable.classList.remove('mid-section');
    bookTable.classList.add('hdn');
    form.classList.remove('mid-section');
    form.classList.add('hdn');
    contact.classList.add('mid-section');
    contact.classList.remove('hdn');
    header[0].textContent = 'Contact Information';
  });

  export {displayBookList, displayBookForm, displayContactInfo};