// 单例模式常用来定义命名空间
var A = {
    Util: {
        util_method1: function () {},
        util_method2: function () {}
    },
    Tool: {
        tool_method1: function () {},
        tool_method2: function () {}
    },
    Ajax: {
        get: function () {},
        post: function () {}
    },
    others: {}
}

var conf = (function(){
    // 私有变量
    var conf = {
        MAX_NUM: 100,
        MIN_NUM: 1,
        COUNT: 1000
    }
    // 返回去取值器对象
    return {
        get: function (name) {
            return conf[name] ? conf[name]:null
        }
    }
})()

