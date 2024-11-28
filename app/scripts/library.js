const bookLibrary = [];
let formVisible = false;
const table = document.getElementById("table-body");
const form = document.getElementById("book-form");
const addBtn = document.getElementById("add-button");

addBtn.addEventListener("click", (e) => {
    formVisible = !formVisible;
    form.style.visibility = formVisible ? "visible" : "hidden";
})

form.addEventListener("submit", addBookToLibrary);

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function () {
        let string = `${this.title} by ${this.author}, ${this.pages} pages, `
        return string += hasRead ? 'read' : 'not read yet';
    }
}

function addBookToLibrary(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    bookLibrary.push(new Book(data.get("title"), data.get("author"), data.get("pages"), data.get("read")));
    displayBooksToPage();
}

function displayBooksToPage() {
    let count = 0;
    table.replaceChildren()
    for (const book of bookLibrary) {
        const row = document.createElement("tr");

        const index = document.createElement("td");
        index.textContent = count.toString();
        row.appendChild(index);

        const title = document.createElement("td");
        title.textContent = book.title;
        row.appendChild(title);

        const author = document.createElement("td");
        author.textContent = book.author;
        row.appendChild(author);

        const pages = document.createElement("td");
        pages.textContent = book.pages;
        row.appendChild(pages);

        const hasRead = document.createElement("td");
        hasRead.textContent = book.hasRead ? "true" : "false";
        row.appendChild(hasRead);

        table.appendChild(row);
        count++;
    }
}