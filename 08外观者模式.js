// 外观者模式实现

//解决事件绑定兼容性问题
function addEvent(dom, type, fn) {
    // 对于支持Dom2级事件处理程序 addEventListener方法的浏览器
    if(dom.addEventListener){
        dom.addEventListener(type, fn, false)
    // 对于不支持addEventListener方法但支持attachEvent方法的浏览器
    }else if(dom.attachEvent){
        dom.attachEvent('on'+type, fn);
    }else {
        dom['on' + type] = fn;
    }
}

//获取事件对象
var getEvent = function(event){
    // 标准浏览器返回event，IE下返回window.event
    return event || window.event;
}
// 获取元素
var getTarget = function (event) {
    var event = getEvent(event)
    // 标准浏览器下event.target,IE下event.srcElement
    return event.target || event.srcElement;
}
//阻止默认行为
var preventDefault = function (event) {
    var event = getEvent(event);
    // 标准浏览器
    if(event.preventDefault){
        event.preventDefault();
        //IE 浏览器
    }else{
        event.returnValue = false;
    }
}



var myInput = document.getElementsByTagName('body');
addEvent(myInput,'click',function () {
    console.log('绑定第一个事件')
})

addEvent(myInput,'click',function () {
    console.log('绑定第二个事件')
})

addEvent(myInput,'click',function () {
    console.log('绑定第三个事件')
})






