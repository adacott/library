// Book constructor to create book objects
class Book {
    constructor(title, author, pages, date_release, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.date_released = date_release;
        this.read = read;
    }
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
    let book1 = new Book(title_in.value, author_in.value, pages_in.value, date_in.value, read_in.value);
    myLibrary.push(book1);

    createCard();
    document.querySelector("form").reset();

    const readButton = document.querySelectorAll(".read");
    readButton.forEach(bt => bt.addEventListener("click", toggleRead));

    const removeButton = document.querySelectorAll(".remove");
    removeButton.forEach(bk => bk.addEventListener("click", removeBook));
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
    remove.className = "remove";

    title.innerHTML = `${myLibrary[idx].title}`;
    author.innerHTML = `${myLibrary[idx].author}`;
    pages.innerHTML = `${myLibrary[idx].pages}`;
    date.innerHTML = `${myLibrary[idx].date_released}`;
    remove.innerHTML = "Remove Book";
    // Get the current read status and update it in the card
    if (read_in.options[read_in.selectedIndex].value == "yes") {
        read.innerHTML = "Read";
        card.classList.add("isRead")
    }
    else {
        read.innerHTML = "Not Read";
    }

    // Add data attribute for index tracking:
    card.dataset.indexNumber = `${idx}`;
    idx += 1;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(date);
    card.appendChild(read);
    card.appendChild(remove);
    cards.appendChild(card);
}

function toggleRead() {
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
    console.log(this.parentElement.dataset.indexNumber);
    start = this.parentElement.dataset.indexNumber;

    console.log(cards.children);
    for (i = start; i < cards.children.length; i++) {
        if (cards.children[i].dataset.indexNumber > start) {
            current_index = cards.children[i].dataset.indexNumber;
            current_index -= 1;
            cards.children[i].dataset.indexNumber = current_index;
        }
    }

    // Remove the child, set it to null to clear the memory
    myLibrary.splice(start, 1);
    cards.removeChild(this.parentElement);
    this.parentElement = null;
    console.log(cards.children);
    idx -= 1;
}

const open_Dialog = document.querySelector(".add-book button");
const closeButton = document.querySelector("dialog button");
const cards = document.querySelector(".cards");
const dialog = document.querySelector("dialog");
const myLibrary = [];
let idx = 0;

open_Dialog.addEventListener("click", openDialog);
closeButton.addEventListener("click", addBookToLibrary);







/* These are some useful links for where I left off.
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog */

