class Booklist {
    constructor (arr,index){
        this.allBooks = arr;
        this.currentBookIndex = index;
    }

    add(arr) {
        this.allBooks = this.allBooks.concat(arr);
    };
    getCurrentBook() {
        return this.allBooks[this.currentBookIndex];
    };
    getNextBook() {
        return this.allBooks[this.currentBookIndex + 1];
    };
    getPrevBook() {
        return this.allBooks[this.currentBookIndex - 1];
    };
    changeCurrentBook(newIndex) {
        this.currentBookIndex = newIndex;
    };
}

class Book {
    constructor(title,category,author,finishedDate){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = finishedDate;
    }
    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = new Date;
    }
}

let first = new Book("Mistake","Fiction", "Abhi Mane", "1/1/2021");
let second = new Book("5 point some one", "Non-Fiction", "Chetan Bhagat", "1/7/2015");
let third = new Book("Love story","Fiction", "Smita Rao", "23/4/2026");
let fourth = new Book("Life and experiment", "Suspension", "Stya murti", "26/3/2018");
let fifth = new Book("Filter Copy","Triller", "Mahesh Kawade", "22/8/2019");

let allMyBooks = new Booklist([first,second,third,fourth,fifth], 3);
