function inheritobject(o) {
    // 声明一个过渡函数对象
    function F() {}
    // 过渡对象的原型继承父对象
    F.prototype = o;
    // 返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F();
}

function inheritPrototype(subclass, superclass) {
    // 复制一份父类的原型副本保存在变量中
    var p = inheritobject(superclass.prototype)
    // 修正因为重写子类原型导致子类的constructor属性被修改
    p.constructor = subclass;
    // 设置子类的原型
    subclass.prototype = p;
}