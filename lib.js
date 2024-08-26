const myLibrary = [];
let bookDiv, titleP, authorP, pagesP, bookBtnDiv;
//let readButton;
let removeButton = [];
let readButton = [];





function Book(title, author, pages, id, status) {
    //the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.status = status;
}


// Create divs for book
Book.prototype.createBook = function() {
    console.log ("Creating a book div");

    bookDiv = document.createElement("div")
    bookDiv.setAttribute("class", "book");
    
    titleP = document.createElement("p");
    authorP = document.createElement("p");
    pagesP = document.createElement("p");
    pagesP = document.createElement("p");
    bookBtnDiv = document.createElement("div");
    bookBtnDiv.setAttribute("class", "bookBtnDiv");

    readButton[this.id] = document.createElement("button");
    readButton[this.id].setAttribute("class", "readStatusBtn");

    removeButton[this.id] = document.createElement("button");
    removeButton[this.id].setAttribute("class", "removeBtn");
    
    bookDiv.setAttribute("id", this.title);
    bookDiv.appendChild(titleP);
    bookDiv.appendChild(authorP);
    bookDiv.appendChild(pagesP);
    bookDiv.appendChild(bookBtnDiv);
    bookBtnDiv.appendChild(readButton[this.id]);
    bookBtnDiv.appendChild(removeButton[this.id]);



    titleP.textContent = this.title;
    titleP.style.fontWeight = "bold";
    authorP.textContent = this.author;
    pagesP.textContent = this.pages + " pgs";

    //removeButton
    removeButton[this.id].style.padding = "3px 6px";
    removeButton[this.id].style.border = "1px solid black";
    removeButton[this.id].style.borderRadius = "8px";
    removeButton[this.id].style.minWidth = "4rem";
    removeButton[this.id].style.maxWidth = "4rem";
    removeButton[this.id].style.justifySelf = "center";
    removeButton[this.id].textContent = "Remove"
    removeButton[this.id].style.backgroundColor = "#949494";
    removeButton[this.id].style.color = "black";
    removeButton[this.id].style.fontWeight = "bold";
    


    readButton[this.id].style.padding = "3px 6px";
    readButton[this.id].style.border = "1px solid black";
    readButton[this.id].style.borderRadius = "8px";
    readButton[this.id].style.minWidth = "4rem";
    readButton[this.id].style.justifySelf = "center";

    if (this.status)
    {
        readButton[this.id].textContent = "Read"
        readButton[this.id].style.backgroundColor = "#478847";
        readButton[this.id].style.color = "white";
        readButton[this.id].style.fontWeight = "bold";
    }
    else{
        readButton[this.id].textContent = "Unread"
        readButton[this.id].style.backgroundColor = "rgb(255, 138, 138)";
        readButton[this.id].style.color = "white";
        readButton[this.id].style.fontWeight = "bold";
    }   

    return bookDiv;
}

function addBookToLibrary(Book) {
    console.log("Adding Book");

    console.log(Book);
    myLibrary.push(Book);
}

const harryPotter = new Book ("Harry Potter", "JK Rowling", 200, 0, true);
const lordOfTheRings= new Book ("Lord of the Rings", "JRR Tolkien", 600, 1, true);
const shootThrees = new Book ("How to Shoot 3s", "Steph Curry", 333, 2, false);

//let newBook = new Book ("temp", "temp", 1, 0, true);


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

    let newBook = new Book ("temp", "temp", 1, -1, true);
    newBook.title = document.querySelector("#bookTitle").value;
    newBook.author = document.querySelector("#bookAuthor").value;
    newBook.pages = document.querySelector("#bookPageNums").value;
    console.log(document.querySelector("#readStatus").value);
    if (document.querySelector("#readStatus").value == "No")
        newBook.status = false;
    else
        newBook.status = true;

    newBook.id = myLibrary.length - 1;
    
    if (newBook.title.length < 1 | newBook.author.length < 1)
        alert("Please enter all text fields");
    else 
    {   
        if (newBook.pages < 1)
        {
            alert("Please enter a page number of at least 1");
        }
        else{
            addBookToLibrary(newBook);
            libraryContainer.appendChild(myLibrary[myLibrary.length - 1].createBook());
            e.preventDefault();
            dialog.close();
        }
    }
}

// When the user clicks the close button, close the dialog
closeDialogBtn.onclick = function() {
    dialog.close();
}

//When user clicks read button, it changes it's status
const readBtn = document.querySelector("#closeDialogBtn");
