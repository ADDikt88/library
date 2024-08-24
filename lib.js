const myLibrary = [];
let bookDiv, titleP, authorP, pagesP;




function Book(title, author, pages) {
    //the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
}



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

