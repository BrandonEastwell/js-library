let bookLibrary = [];
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
    this.index = undefined;
    this.info = function () {
        let string = `${this.title} by ${this.author}, ${this.pages} pages, `
        return string += hasRead ? 'read' : 'not read yet';
    }
}

Book.prototype.toggleReadStatus = function () {
    this.hasRead = !this.hasRead;
    displayBooksToPage();
};



function addBookToLibrary(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    bookLibrary.push(new Book(data.get("title"), data.get("author"), data.get("pages"), data.get("read")));
    displayBooksToPage();
}

function removeBookFromLibrary(index) {
    bookLibrary = bookLibrary.toSpliced(index, 1);
    displayBooksToPage();
}

function displayBooksToPage() {
    table.replaceChildren()
    let count = 0;
    for (const book of bookLibrary) {
        book.index = count;
        const row = document.createElement("tr");

        const index = document.createElement("td");
        index.textContent = book.index.toString();
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
        const readBtn = document.createElement("button");
        readBtn.textContent = book.hasRead ? "true" : "false";
        readBtn.addEventListener("click", () => book.toggleReadStatus());
        hasRead.appendChild(readBtn);
        row.appendChild(hasRead);

        const delBtn = document.createElement("button");
        delBtn.textContent = "-";
        delBtn.addEventListener("click", () => removeBookFromLibrary(book.index));
        row.appendChild(delBtn);

        table.appendChild(row);
        count++;
    }
}