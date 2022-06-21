// 惰性单例
var Lazysingle = (function () {
    // 单例实例引用
    var _instance = null;
    // 单例
    function single() {
        // 这里定义私有属性和方法
        return {
            publicMethod: function (){},
            publicProperty: '1.0'
        }
    }
    // 获取单例对象接口
    return function () {
        // 如果为创建单例将创建单例
        if(!_instance){
            _instance = single()
        }else{
            return _instance
        }
    }
})()

console.log(Lazysingle())