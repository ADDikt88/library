const myLibrary = [];
let bookDiv, titleP, authorP, pagesP;





function Book(title, author, pages) {
    //the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
}


// Create divs for book
Book.prototype.createBook = function() {
    console.log ("Creating a book div");

    bookDiv = document.createElement("div")
    bookDiv.setAttribute("class", "book");
    titleP = document.createElement("p");
    authorP = document.createElement("p");
    pagesP = document.createElement("p");
    bookDiv.setAttribute("id", this.title);
    bookDiv.appendChild(titleP);
    bookDiv.appendChild(authorP);
    bookDiv.appendChild(pagesP);
    titleP.textContent = this.title;
    authorP.textContent = this.author;
    pagesP.textContent = this.pages + " pgs";

    return bookDiv;
}

function addBookToLibrary(Book) {
    console.log("Adding Book");

    console.log(Book);
    myLibrary.push(Book);
}

const harryPotter = new Book ("Harry Potter", "JK Rowling", 200);
const lordOfTheRings= new Book ("Lord of the Rings", "JRR Tolkien", 600);
const shootThrees = new Book ("How to Shoot 3s", "Steph Curry", 333);

let newBook = new Book ("temp", "temp", 1);


addBookToLibrary(harryPotter);
addBookToLibrary(lordOfTheRings);
addBookToLibrary(shootThrees);

console.log(myLibrary);


//Loop through array and displays each book on the page
const libraryContainer = document.querySelector(".library")

function displayBooks () {
    for (let i = 0; i < myLibrary.length; i++){
        libraryContainer.appendChild(myLibrary[i].createBook());
    }
};

displayBooks();

const addBookBtn = document.querySelector(".add-book");
const dialog = document.querySelector("#addBookDialog");
const confirmBtn = document.querySelector("#confirmBtn");
const closeDialogBtn = document.querySelector("#closeDialogBtn");

addBookBtn.addEventListener('click', (e) => {
    //Show dialog;
    dialog.showModal();
});

// When the user clicks the submit button, get the input value and close the dialog
confirmBtn.onclick = function(e) {
    newBook.title = document.querySelector("#bookTitle").value;
    newBook.author = document.querySelector("#bookAuthor").value;
    newBook.pages = document.querySelector("#bookPageNums").value;
    addBookToLibrary(newBook);
    libraryContainer.appendChild(myLibrary[myLibrary.length - 1].createBook());
    e.preventDefault();
    dialog.close();
}

// When the user clicks the close button, close the dialog
closeDialogBtn.onclick = function() {
    dialog.close();
}
