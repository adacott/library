// const book1 = new Book("The Wise Man's Fear", "Patrick Rothfuss", 1120, true);

const myLibrary = [];

function Book(title, author, pages, read, date_released) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.date_released = date_released;
    this.read = read;

    // this.info = function () {
    //     if (this.read) {
    //         str = `${title} by ${author}, ${pages} pages, has been read`;
    //     }
    //     else {
    //         str = `${title} by ${author}, ${pages} pages, not read yet`;
    //     }
    //     return str;
    // }
}

// Get form input to create new book object 
function addBookToLibrary() {
    // Retrieve form data:
    // title =
    // author =
    // pages =
    // read =
    // date_released =

    // Create new book:
    const book = new Book()

    // Store book in the Library array:
    myLibrary.push(book);
}

const book1 = new Book("The Wise Man's Fear", "Patrick Rothfuss", "1120", "true", "01 March 2011");
const book2 = new Book("The Stone door", "Patrick Rothfuss", "1120", "true", "Unknown");
myLibrary.push(book1);
myLibrary.push(book2);
// console.log(myLibrary);

// console.log(myLibrary[1].title); -- this allows access of the books stuff




const add_book = document.querySelector(".add-book button");
const cards = document.querySelector(".cards");

// Create a dummy function to add the card, and all elements to the pages in preparation for doing so
// with a form and class
add_book.addEventListener("click", function (e) {

    // // console.log(e);
    // const card = document.createElement("div");
    // const title = document.createElement("div");
    // const author = document.createElement("div");
    // const pages = document.createElement("div");
    // const released = document.createElement("div");
    // const read = document.createElement("button");
    // const remove = document.createElement("button");

    // // Assign classes to all elements
    // card.className = "card";
    // title.className = "title";
    // author.className = "author";
    // pages.className = "pages";
    // released.className = "released";
    // read.className = "read";

    // // Assign innerHTML content
    // title.innerHTML = "The Stone Door"
    // author.innerHTML = "Patrick Rothfuss";
    // pages.innerHTML = "1120";
    // pages.innerHTML = `${pages.innerHTML} pages`;
    // released.innerHTML = "01 March 2016";
    // read.innerHTML = "Not Read";
    // remove.innerHTML = "Remove book";

    // // Add elements to the card
    // card.appendChild(title);
    // card.appendChild(author);
    // card.appendChild(pages);
    // card.appendChild(released);
    // card.appendChild(read);
    // card.appendChild(remove);




    // Code needed to open, close, and use modal input values
    const dialog = document.querySelector("dialog");
    const closeButton = document.querySelector("dialog button");
    const title_in = document.querySelector("#title");
    const author_in = document.querySelector("#author");
    const pages_in = document.querySelector("#pages");
    const date_in = document.querySelector("#date");
    const read_in = document.querySelector("#read");

    // cards.appendChild(card);
    dialog.style.display = "contents";
    dialog.showModal();

    // "Close" button closes the dialog
    closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        dialog.close();
        dialog.style.display = "none";
        /* How to return the value of the input */
        console.log(title_in.value);
        console.log(author_in.value);
        console.log(pages_in.value);
        console.log(date_in.value);
        console.log(read_in.value);
        document.querySelector("form").reset();
    });
})


/* These are some useful links for where I left off.
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog */

