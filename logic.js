// Book constructor to create book objects
function Book(title, author, pages, date_released, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.date_released = date_released;
    this.read = read;
}

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

    createCard();
    document.querySelector("form").reset();

    const readButton = document.querySelectorAll(".read");
    readButton.forEach(bt => bt.addEventListener("click", toggleRead));
}

function createCard() {

    const card = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const date = document.createElement("div");
    const read = document.createElement("button");
    const remove = document.createElement("button");
    const read_in = document.querySelector("#read");

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
    // Get the current read status and update it in the card
    if (read_in.options[read_in.selectedIndex].value == "yes") {
        read.innerHTML = "Read";
        card.classList.add("isRead")
    }
    else {
        read.innerHTML = "Not Read";
    }

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(date);
    card.appendChild(read);
    card.appendChild(remove);
    cards.appendChild(card);
}

function toggleRead(e) {
    if (this.parentElement.classList.contains("isRead")) {
        this.parentElement.classList.remove("isRead");
        this.innerHTML = "Not Read";
    }
    else {
        this.parentElement.classList.add("isRead");
        this.innerHTML = "Read";
    }
}

function removeBook() {

}

const open_dialog = document.querySelector(".add-book button");
const closeButton = document.querySelector("dialog button");
const cards = document.querySelector(".cards");
const dialog = document.querySelector("dialog");
const myLibrary = [];
const idx = 0;

open_dialog.addEventListener("click", openDialog);
closeButton.addEventListener("click", addBookToLibrary);







/* These are some useful links for where I left off.
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog */

