// 原型式继承
function inheritobject(o) {
    // 声明一个过渡函数对象
    function F() {}
    // 过渡对象的原型继承父对象
    F.prototype = o;
    // 返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F();
}

var book = {
    name: 'js book',
    alikeBook: ['css book','html book']
};

var newBook = inheritobject(book);
newBook.name = 'ajax book';
newBook.alikeBook.push('xml book');
var otherBook = inheritobject(book);
otherBook.name = 'flash book';
otherBook.alikeBook.push('as book');
console.log(newBook.name);
console.log(newBook.alikeBook)
console.log(otherBook.name);
console.log(otherBook.alikeBook)