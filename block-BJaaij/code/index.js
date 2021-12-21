class Booklist {
    constructor (){
        this.books = [];
        this.currentBookIndex = 0;
    }

    add(books = []) {
        this.books = this.books.concat(books);
    };
    getCurrentBook() {
        return this.books[this.currentBookIndex];
    };
    getNextBook() {
        return this.books[this.currentBookIndex + 1];
    };
    getPrevBook() {
        return this.books[this.currentBookIndex - 1];
    };
    changeCurrentBook(newIndex) {
        this.currentBookIndex = newIndex;
    };
}

class Book {
    constructor(title,category,author){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = new Date;
    }
}

let first = new Book("Mistake","Fiction", "Abhi Mane");
let second = new Book("5 point some one", "Non-Fiction", "Chetan Bhagat");
let third = new Book("Love story","Fiction", "Smita Rao",);
let fourth = new Book("Life and experiment", "Suspension", "Stya murti",);
let fifth = new Book("Filter Copy","Triller", "Mahesh Kawade",);

let library = new Booklist();

library.add([first,second,third,fourth,fifth]);