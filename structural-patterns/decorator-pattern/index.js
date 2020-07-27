class Book {
    constructor(title, author, price) {
        this._title = title;
        this._author = author;
        this._price = price;
    }
    getDetails() {
        return `${this._title} by ${this._author}`;
    }
}

//decorators
function giftWrap(book) {
    book.isGiftWrapped = true;
    book.unwrap = function() {
        return `Unwrapped ${book.getDetails()}`;
    }
    return book;
}

//decorators
function hardbindBook(book) {
    book.isHardbound = true;
    book.price += 5;
    return book;
}

//usage
const alchemist = giftWrap(new Book('The Alchemist', 'Paulo Coelho', 10));
console.log(alchemist.isGiftWrapped);
console.log(alchemist.unwrap());

const inferno = hardbindBook(new Book('Inferno', 'Dan Brown', 15))
console.log(inferno.isHardbound);
console.log(inferno.price);
