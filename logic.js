// const book1 = new Book("The Wise Man's Fear", "Patrick Rothfuss", 1120, true);

const myLibrary = [];

function Book(title, author, pages, date_released, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.date_released = date_released;
    this.read = read;
}


const open_dialog = document.querySelector(".add-book button");
const cards = document.querySelector(".cards");
const closeButton = document.querySelector("dialog button");
const dialog = document.querySelector("dialog");


open_dialog.addEventListener("click", openDialog);
closeButton.addEventListener("click", addBookToLibrary);

function openDialog() {
    dialog.style.display = "contents";
    dialog.showModal();
}

function addBookToLibrary(event) {
    event.preventDefault();
    dialog.close();
    dialog.style.display = "none";

    // Save form information
    const title_in = document.querySelector("#title");
    const author_in = document.querySelector("#author");
    const pages_in = document.querySelector("#pages");
    const date_in = document.querySelector("#date");
    const read_in = document.querySelector("#read");

    // Create a book using form information
    book1 = new Book(title_in.value, author_in.value, pages_in.value, date_in.value, read_in.value);
    myLibrary.push(book1);
    console.log(myLibrary[0]);

    document.querySelector("form").reset();

    createCard();
}

function createCard() {

    const card = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const date = document.createElement("div");
    const read = document.createElement("button");
    const remove = document.createElement("button");

    card.className = "card";
    title.className = "title";
    author.className = "author";
    pages.className = "pages";
    date.className = "released";
    read.className = "read";

    title.innerHTML = `${myLibrary[0].title}`;
    author.innerHTML = `${myLibrary[0].author}`;
    pages.innerHTML = `${myLibrary[0].pages}`;
    date.innerHTML = `${myLibrary[0].date}`;
    remove.innerHTML = "Remove Book";

    // TODO: Create a small section that will add or remove a class to style
    // the card and elements based on the value of read or not.
    read.innerHTML = "Not Read";  /* `${myLibrary[0].read}`; */


    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(date);
    card.appendChild(read);
    card.appendChild(remove);

    cards.appendChild(card);
}

function removeBook() {

}





/* These are some useful links for where I left off.
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog */

