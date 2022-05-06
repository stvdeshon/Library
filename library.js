
//opens modal to add new books
const addBook = document.querySelector("#new");
//submits user input
const submit = document.querySelector('#submit');
//opens book entries
const openBook = document.querySelectorAll(".open");
//closes opened modals
const closeModal = document.querySelectorAll(".close");
//deletes selected books (currently testing with this to see if id works rather than class on book objects)
const removeBook = document.querySelector("#remove");
//modal containers
const formContainer = document.querySelector("#form-container");
const bookContainer = document.querySelector("#book-container");
//modals
const formModal = document.querySelector("#form-modal");
const bookModal = document.querySelector("#book-modal");
//input values




//button events

//modal toggles
addBook.addEventListener('click', () => {
    formContainer.classList.add('show');
});

openBook.forEach((book) => {
    book.addEventListener('click', () => {
        bookContainer.classList.add('show');
    })
});

//closes modals

closeModal.forEach((modal) => {
    modal.addEventListener('click', () => {
        formContainer.classList.remove('show');
        bookContainer.classList.remove('show');
    })
});

//submits user info to constructBook function
// submit.addEventListener('click', () => {
//     console.log(constructBook('alice', 'carrol', 500, 'a bit'));
//     formContainer.classList.remove('show');
// });

//parameter is filler, need to find how to feed specific index later
removeBook.addEventListener('click', (index) => {
    deleteBook(index);
    bookContainer.classList.remove('show');
});

let myLibrary = [];


constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}




//submits user info to constructBook function
submit.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementsByName('read');
    let radioVal;

    for(i = 0; i < read.length; i++) {
        if(read[i].checked)
        radioVal = read[i].value;
    }

    
    console.log(constructBook(title, author, pages, radioVal));
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    //can't remove the selection, might need to use checkbox
    // document.getElementsByName('read').checked = false;
    formContainer.classList.remove('show');
});


//constructs book, adds to array, will have to connect user input from form
function constructBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return newBook;
}

//deletes selected book from array, may have to add ui deletion later
function deleteBook(index) {
    myLibrary.splice(index, 1);
    return myLibrary;
}






