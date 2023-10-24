// const book1 = new Book("The Wise Man's Fear", "Patrick Rothfuss", 1120, true);

const myLibrary = [];

function Book(title, author, pages, date_released, read) {
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
const open_dialog = document.querySelector(".add-book button");
const cards = document.querySelector(".cards");
const closeButton = document.querySelector("dialog button");
const dialog = document.querySelector("dialog");

open_dialog.addEventListener("click", openDialog);
closeButton.addEventListener("click", saveInput);

function openDialog() {
    dialog.style.display = "contents";
    dialog.showModal();
}

function addBookToLibrary(event) {
    event.preventDefault();
    dialog.close();
    dialog.style.display = "none";

    const title_in = document.querySelector("#title");
    const author_in = document.querySelector("#author");
    const pages_in = document.querySelector("#pages");
    const date_in = document.querySelector("#date");
    const read_in = document.querySelector("#read");

    /* How to return the value of the input */
    console.log(title_in.value);
    console.log(author_in.value);
    console.log(pages_in.value);
    console.log(date_in.value);
    console.log(read_in.value);

    // book1 = new Book(title_in.value, author_in.value, pages_in.value, date_in.value, read_in.value);
    // myLibrary.push(book1);
    // console.log(myLibrary[0].title);
    // title_out.innerHTML = `${title_in.value}`
    // console.log(`${title_out.innerHTML} Is the title_out innerhtml`);
    document.querySelector("form").reset();
}



// const remove = document.createElement("button");
// const card = document.createElement("div");
// const title_out = document.createElement("div");
// const author_out = document.createElement("div");
// const pages_out = document.createElement("div");
// const released_out = document.createElement("div");
// const read_out = document.createElement("button");

// card.className = "card";
// title_out.className = "title";
// author_out.className = "author";
// pages_out.className = "pages";
// released_out.className = "released";
// read_out.className = "read";

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






/* These are some useful links for where I left off.
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog */

