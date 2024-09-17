const newBook = document.querySelector("#new-book")
const bookForm = document.querySelector(".form-container");

newBook.addEventListener('click', (event) => {
    if (bookForm.style.display === 'none' || bookForm.style.display === "") {
        bookForm.style.display = 'block';
    } else {
        bookForm.style.display = 'none';
    }
});

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
const readStatus = document.querySelector("#readStatus").checked;
const newBook = new Book(title, author, pages, readStatus);
myLibrary.push(newBook);
displayBooks();
}

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
});

function displayBooks() {
    const bookDisplay = document.querySelector(".book-display");
    bookDisplay.textContent = " ";
    myLibrary.forEach(book => {
       const bookContainer = document.createElement("div");
        bookContainer.classList.add("book-container");

        const titleElement = document.createElement("p");
        titleElement.textContent = "Title: " + book.title;
        bookContainer.appendChild(titleElement);

        const authorElement = document.createElement("p");
        authorElement.textContent = "Author: " + book.author;
        bookContainer.appendChild(authorElement);

        const pagesElement = document.createElement("p");
        pagesElement.textContent = "Pages: " + book.pages;
        bookContainer.appendChild(pagesElement);

        const readStatusElement = document.createElement("p");
        let readStatusText = book.readStatus ? "Yes" : "No";
        readStatusElement.textContent = "Read: " + readStatusText;
        bookContainer.appendChild(readStatusElement);

        bookDisplay.appendChild(bookContainer);
    });
}
