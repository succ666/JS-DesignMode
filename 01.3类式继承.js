// 类式继承
// 声明父类
function superclass() {
    this.superValue = true;
}
// 为父类添加共有方法
superclass.prototype.getsuperValue = function () {
    return this.superValue;
};
// 声明子类
function subclass() {
    this.subValue = false;
}
// 继承父类
subclass.prototype = new superclass();
// 为子类添加共有方法
subclass.prototype.getsubValue = function () {
    return this.subValue;
};

var instance = new subclass();
console.log(instance.getsuperValue())
console.log(instance.getsubValue())

console.log(instance instanceof superclass)
console.log(instance instanceof subclass)

console.log(subclass.prototype instanceof superclass)