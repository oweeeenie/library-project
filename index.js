const myLibrary = [];

function Book(title, author, pages, readStatus) {
this.title = title;
this.author = author;
this.pages = pages;
this.readStatus = readStatus;
}

function addBookToLibrary() {
const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;
const pages = document.querySelector("#pages").value;
const readStatus = document.querySelector("#readStatus").value;
const newBook = new Book(title, author, pages, readStatus);
myLibrary.push(newBook);
displayBooks();
}

const bookForm = document.querySelector("#bookForm");

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
});

function displayBooks() {
    const bookDisplay = document.querySelector(".book-display");
    bookDisplay.textContent = " ";
    myLibrary.forEach(book => {
        const displayBook = document.createElement("div")
        displayBook.textContent = book.title + " by " + book.author + " pages: " + book.pages;
        bookDisplay.appendChild(displayBook);
    });
};
