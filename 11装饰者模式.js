// 装饰者
var decorator = function (input, fn) {
    // 获取事件源
    var input = document.getElementById(input);
    // 若事件源已经绑定事件
    if(typeof input.onclick == 'function'){
        // 缓存事件源原有回调函数
        var oldclickFn = input.onclick;
        // 为事件源定义新的事件
        input.onclick = function () {
            // 事件源原有回调函数
            oldclickFn();
            // 执行事件源新增回调函数
            fn();
        }
    }else{
        // 事件源未绑定事件，直接为事件源添加新增回调函数
        input.onclick = fn;
    }
}