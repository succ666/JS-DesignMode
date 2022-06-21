// 构造函数继承
// 声明父类
function superclass(id) {
    // 引用类型共有属性
    this.books = ['Javascript','html','css'];
    // 值类型共有属性
    this.id = id;
}

// 父类声明原型方法
superclass.prototype.showBooks = function () {
    console.log(this.books)
}

// 声明子类
function subclass(id) {
    // 继承父类
    superclass.call(this, id)
}

// 创建第一个子类实例
var instancel1 = new subclass(10);
// 创建第二个子类实例
var instancel2 = new subclass(11);
instancel1.books.push("设计模式");
console.log(instancel1.books);
console.log(instancel1.id);
console.log(instancel2.books);
console.log(instancel2.id)

instancel1.showBooks()


