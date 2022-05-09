//opens modal to add new books
const addBook = document.querySelector("#new");
//submits user input
const submit = document.querySelector('#submit');
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

let myLibrary = [];

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

    function createButton(index) {
        let btn = document.createElement('button');
        btn.classList.add('books');
        btn.setAttribute('id', title);
        btn.textContent = index;
        return btn;
    }

    
    constructBook(title, author, pages, radioVal);
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    //can't remove the selection, might need to use checkbox
    // document.getElementsByName('read').checked = false;

    library.appendChild(createButton(title));
    bookName = title;
    formContainer.classList.remove('show');
    console.log(myLibrary);
});

//constructs book, adds to array
function constructBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return newBook;
}

library.addEventListener('click', function(e) {
    if (e.target.classList.contains('books')) {
        const title = document.getElementById('book-title');
        const author = document.getElementById('book-author');
        const pages = document.getElementById('book-pages');
        //add read toggle here

        myLibrary.forEach((obj) => {
            if (obj.title === e.target.id) {
                title.textContent = obj.title;
                author.textContent = obj.author;
                pages.textContent = obj.pages;
            }
        })
        bookContainer.classList.add('show');
    }
})

//this event handler deletes the UI element and the corresponding object from the array
removeBook.addEventListener('click', () => {
    const title = document.getElementById('book-title');
    const btn = document.querySelectorAll('.books');
    btn.forEach((book) => {
        if (book.textContent === title.textContent) {
            book.remove();
        }
    })
    myLibrary.forEach((obj) => {
        if (obj.title === title.textContent) {
            
            myLibrary.splice(deleteBook(), 1);
        }
    })
    console.log(myLibrary);
    bookContainer.classList.remove('show');
});


function deleteBook() {
    const title = document.getElementById('book-title');
    const index = myLibrary.findIndex(obj => obj.title === title.textContent);

    return index
}
