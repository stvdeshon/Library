
//opens modal to add new books
const addBook = document.querySelector("#new");
//submits user input
const submit = document.querySelector('#submit');
//opens book entries
const openBook = document.querySelectorAll(".books");
//closes opened modals
const closeModal = document.querySelectorAll(".close");
//deletes selected books (currently testing with this to see if id works rather than class on book objects)
const removeBook = document.querySelector("#remove");
//the main library
const library = document.querySelector('#library');
//modal containers
const formContainer = document.querySelector("#form-container");
const bookContainer = document.querySelector("#book-container");
//modals
const formModal = document.querySelector("#form-modal");
const bookModal = document.querySelector("#book-modal");
//opens each book
const opened = document.querySelectorAll('.open');

//modal toggles
addBook.addEventListener('click', () => {
    formContainer.classList.add('show');
});



closeModal.forEach((modal) => {
    modal.addEventListener('click', () => {
        formContainer.classList.remove('show');
        bookContainer.classList.remove('show');
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
    })
});

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

//may have to add more styling and functionality later
function createButton(index) {
    let btn = document.createElement('button');
    btn.classList.add('books');
    btn.textContent = index;
    return btn;
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

    
    constructBook(title, author, pages, radioVal);
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    //can't remove the selection, might need to use checkbox
    // document.getElementsByName('read').checked = false;

    library.appendChild(createButton('book1'));
    formContainer.classList.remove('show');
    console.log(myLibrary);
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

library.addEventListener('click', function(e) {
    if (e.target.classList.contains('books')) {
        const title = document.getElementById('book-title');
        const author = document.getElementById('book-author');
        const pages = document.getElementById('book-pages');
        const read = document.getElementsByName('result');
        title.textContent = `Title: ${myLibrary[0].title}`;
        author.textContent = `Author: ${myLibrary[0].author}`;
        pages.textContent = `Page Count: ${myLibrary[0].pages}`;
        bookContainer.classList.add('show');
    }
})



