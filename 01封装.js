var Book = function (id, bookname, price) {
    this.id = id;
    this.bookname = bookname;
    this.price = price
}
Book.prototype = {
    display: function () {
        console.log('display')
    }
}


var book = new Book(1, 'java设计模式',13)
console.log(book.id)
console.log(book.bookname)
console.log(book.price)
