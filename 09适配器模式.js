/**
 * 场景一
 * 适配异类框架
  */


 A.g = function(id){
     // 通过jQuery获取jQuery对象, 然后返回第—个成员
     return $(id).get(0);
 }
 A.on = function(id, type, fn){
     // 如果传递参数是字符串则以id处理, 否则以元素对象处理
     var dom = typeof id === 'string' ? $('#' + id) : $(id);
     dom.on(type, fn);
}

/**
 * 场景二
 * 参数适配器
 */
function dosomeThing(obj) {
    var _adapter = {
        name: '雨夜清河',
        title: '设计模式',
        age: 24,
        color: 'pink',
        size: 100,
        prize: 50
    };
    for (var i in _adapter){
        _adapter[i] = obj[i] || _adapter[i];
    }
    // 或者 extend(_adapter, obj) 注：此时可能会多添加属性
    // do things
}

/**
 * 场景三
 * 数据适配
 */
var arr = ['Javascript','book','前端编程语言','8月1日'];

function arrToobjAdapter(arr){
    return {
        name: arr[0],
        type: arr[1],
        title: arr[2],
        data: arr[3]
    }
}

arrToobjAdapter(arr)

/**
 * 场景四
 * 服务器端数据适配
 */

function ajaxAdapter(data){
    // 处理数据并返回新数据
    return [data['key'],data['key2'],data['key3']]
}
$.ajax({
    url: 'someAdress.php',
    success: function (data, status) {
        if(data){
            // 使用适配后的数据-返回的对象
            dosomething(ajaxAdapter(data));
        }
    }
})



















