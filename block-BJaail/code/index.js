class BookList {
    constructor(list = []) {
        this.books = list;
        this.root = document.querySelector(".booklist");
    }
    add(name,author,isbn) {
        let book = new Book(name, author,isbn);
        this.books.push(book);
        this.createUI();
        return this.books.length;
    }
    handleDelete(id) {
        let bookIndex = this.books.findIndex((book) => {return book.id === id});
        this.books.splice(bookIndex, 1);
        this.createUI();
    }
    createUI() {
        this.root.innerHTML = "";
        this.books.forEach((book)=> {
            let ui = book.createUI();
            let span = ui.querySelector("span").addEventListener("click", this.handleDelete.bind(this, book.id));
            this.root.append(ui);
        })
    }
}

class Book {
    constructor(title, author,isbn) {
        this.title = title;
        this.author = author;
        this.id = Date.now();
        this.isbn = isbn;
        this.isRead = false;
    }
    handleInput() {
        this.isRead = !this.isRead;
        this.createUI();
    }
    createUI() {
        let row = document.createElement("tr");
        let title = document.createElement("td");
        title.innerText = this.title;
        
        let author = document.createElement("td");
        author.innerText = this.author;

        let isbn = document.createElement("td");
        let a = document.createElement("a");
        a.href = this.isbn;
        a.innerText = this.isbn;
        isbn.append(a);

        let checkboxHolder = document.createElement("td");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = this.isRead;
        checkbox.addEventListener("click", this.handleInput.bind(this));

        checkboxHolder.append(checkbox);

        let clear = document.createElement("td");
        let span = document.createElement("span");
        span.innerText = "❌";
        clear.append(span);

        row.append(checkboxHolder,title,author,isbn,clear);
        return row;
    }   
}

let myBookList = new BookList ();


let form = document.querySelector("form");

function handleSumbmit(event){
    event.preventDefault();

    let title = event.target.elements.title.value;
    let author = event.target.elements.authorName.value;
    let isbn = event.target.elements.ISBN.value;
    
    myBookList.add(title,author,isbn);
    event.target.elements.title.value = "";
    event.target.elements.authorName.value = "";
    event.target.elements.ISBN.value = "";
}

form.addEventListener("submit", handleSumbmit)