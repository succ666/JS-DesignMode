var Car = function(){}

Car.prototype = {
    getPrice: function () {
        return new Error('getPrice抽象方法不能调用')
    },
    getSpeed: function () {
        return new Error('getSpeed抽象方法不能调用')
    }
}

var car = new Car()
car.getPrice()