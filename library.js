
//opens form to add new books
const addBook = document.querySelector("#new");
//opens book entries
const openBook = document.querySelectorAll(".open");
//closes opened modals
const closeModal = document.querySelectorAll(".close");
//deletes selected books
const removeBook = document.querySelectorAll(".remove");
//modal containers
const formContainer = document.querySelector("#form-container");
const bookContainer = document.querySelector("#book-container");
//modals
const formModal = document.querySelector("#form-modal");
const bookModal = document.querySelector("#book-modal");



//button toggles
addBook.addEventListener('click', () => {
    formContainer.classList.add('show');
});

openBook.forEach((book) => {
    book.addEventListener('click', () => {
        bookContainer.classList.add('show');
    })
});

//closes container divs with modals inside them

closeModal.forEach((modal) => {
    modal.addEventListener('click', () => {
        formContainer.classList.remove('show');
        bookContainer.classList.remove('show');
    })
});

//remove ONLY the selected book

// removeBook.forEach((remove) => {
//     remove.addEventListener('click', () => {
        
//     })
// });

let myLibrary = [];

function Book() {

}

function addBookToLibrary() {

}