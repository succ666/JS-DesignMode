// 组合式继承
// 声明父类
function superclass(name) {
    // 值类型共有属性
    this.name = name;
    // 引用类型共有属性
    this.books = ['html','css','jsvascript'];
}

// 父类原型共有方法
superclass.prototype.getName = function () {
    console.log(this.name)
}

// 声明子类
function subclass(name, time) {
    // 构造函数继承父类name属性
    superclass.call(this, name);
    // 子类中新增共有属性
    this.time = time;
}

// 类式继承 子类原型继承父类
subclass.prototype = new superclass();

// 子类原型方法
subclass.prototype.getTime = function () {
    console.log(this.time)
}

var instancel1 = new subclass("js book", 2013);
instancel1.books.push('设计模式');
console.log(instancel1.books)
instancel1.getName();
instancel1.getTime();
var instancel2 = new subclass("css book", 2013);
console.log(instancel2.books);
instancel2.getName();
instancel2.getTime();

















