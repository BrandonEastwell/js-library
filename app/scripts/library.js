const bookLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        let string = `${this.title} by ${this.author}, ${this.pages} pages, `
        return string += read ? 'read' : 'not read yet';

    }
}

function addBookToLibrary(title, author, pages, read) {
    bookLibrary.push(new Book(title, author, pages, read));
}

function displayBooksToPage() {
    bookLibrary
}