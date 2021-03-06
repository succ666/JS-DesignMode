var canvascommand = (function () {
    // 获取 canvas
    var canvas = document.getElementById('canvas'),
        // canvas元素的上下文引用对象缓存在命令对象的内部
        ctx = canvas.getContext('2d');
    // 内部方法对象
    var Action = {
        // 填充色彩
        fillStyle: function (c) {
            ctx.fillStyle = c;
        },
        // 填充矩形
        fillRect: function (x, y, w, h) {
            ctx.fillRect(x, y, w, h);
        },
        // 描边色彩
        strokeStyle: function (c) {
            ctx.strokeStyle = c;
        },
        // 描边矩形
        strokeRect: function (x, y, w, h) {
            ctx.strokeRect(x, y, w, h);
        },
        // 填充字体
        fillText: function (text, x, y, maxWidth) {
            ctx.fillText(text, x, y, maxWidth)
        },
        // 开启路径
        beginPath: function () {
            ctx.beginPath();
        },
        // 移动画笔触电
        moveTo: function (x, y) {
            ctx.moveTo(x, y)
        },
        // 画笔连线
        lineTo: function (x, y) {
            ctx.lineTo(x, y);
        },
        // 绘制弧线
        arc: function (x, y, r, begin, end, dir) {
            ctx.arc(x, y, r, begin, end, dir);
        },
        // 填充
        fill: function(){
            ctx.fill();
            ctx.stroke();
        },
        // 描边
        stroke: function(){
        }



    }

    return {
        // 命令接口
        excute: function (msg) {
            // 如果设有指令返回
            if (!msg)
                return;
            // 如果命令是—个数组
            if (msg.length) {
                // 遍历执行多个命令
                for (var i = 0, len = msg.length; i < len; i++)
                    arguments.callee(msg[i]);
                // 执行—个命令
            } else {
                // 如果msg.param不是—个数组, 将其转化为数组, apply第二个参数要求格式
                msg.param = Object.prototype.toString.call(msg.param) ===
                "[object Array]" ? msg.param : [msg.param];
                // Action内部调用的方法可能引用this, 为保证作用域中this指向正确, 故传
                // 入Action
                Action[msg.command].apply(Action, msg.param);
            }
        }
    }
})()

// 设置填充色彩为红色, 并绘制—个矩形
canvascommand.excute([
    {command: 'fillStyle', param: 'red'},
    {command: 'fillRect', param : [20, 20, 100, 100]}
]);