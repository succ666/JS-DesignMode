// 模版类 基础提示框 data 渲染数据

var Alert = function(data){
    // 设有数据则返回, 防止后面程序执行
    if(!data)
        return;
    // 设置内容
    this.content = data.content;
    // 创建提示框面板
    this.panel = document.createElement('div');
    // 创建提示内容组件
    this.contentNode = document.createElement('p');
    // 创建底部容器
    this.follter = document.createElement('div')
    // 创建确定按钮组件
    this.confirmBtn = document.createElement('span');
    // 创建关闭按钮组件
    this.closeBtn = document.createElement('b');
    // 为提示框面板添加类
    this.panel.className = 'alert';
    // 为关闭按钮添加类
    this.closeBtn.className = 'a-close';
    // 为确定按钮添加类
    this.confirmBtn.className = 'a-confirm';
    // 底部样式
    this.follter.className = 'follter';
    // 为确定按钮添加文案
    this.confirmBtn.innerHTML = data.confirm || '确认';
    // 为提示内容添加文本
    this.contentNode.innerHTML = this.content;
    // 点击确定按钮执行方法 如果data中有success方法则为success方法, 否则为空函数
    this.success = data.success || function(){};
    // 点击关闭按钮执行方法
    this.fail = data.fail || function(){};
}
// 提示框原型方法
Alert.prototype = {
    // 创建方法
    init: function () {
        // 生成提示框
        this.panel.appendChild(this.follter);
        this.panel.appendChild(this.contentNode);
        this.panel.appendChild(this.closeBtn)
        this.follter.appendChild(this.confirmBtn);

        // this.panel.appendChild(this.closeBtn);
        // this.panel.appendChild(this.confirmBtn);
        // 插入页面中
        document.body.appendChild(this.panel);
        // 绑定事件
        this.bindEvent();
        // 显示提示框
        this.show();
    },
    bindEvent: function () {
        var me = this;
        // 关闭按钮点击事件
        this.closeBtn.onclick = function () {
            // 执行关闭取消方法
            me.fail();
            // 隐藏弹窗
            me.hide();
        }
        // 确定按钮点击事件
        this.confirmBtn.onclick = function () {
            // 执行关闭确认方法
            me.success();
            // 隐藏弹窗
            me.hide();
        }
    },
    // 隐藏弹窗方法
    hide: function () {
        this.panel.style.display = 'none';
    },
    // 显示弹窗方法
    show: function () {
        this.panel.style.display = 'block';
    }
}

// 右侧按钮提示框
var RightAlert = function (data) {
    Alert.call(this,data);
    this.confirmBtn.className = this.confirmBtn + ' right';
}

RightAlert.prototype = new Alert();




 // 标题提示框
var TitleAlert = function(data) {
    // 继承基本提示框构造函数
    Alert.call(this, data);
    // 设置标题内容
    this.title = data.title;
    // 创建标题组件
    this.titleNode = document.createElement('h3');
    // 标题组件中写入标题内容
    this.titleNode.innerHTML = this.title;
}

// 继承基本提示框方法
TitleAlert.prototype = new Alert();
// 对基本提示框创建方法拓展
TitleAlert.prototype.init = function() {
    // 插入标题
    this.panel.insertBefore(this.titleNode, this.panel.firstChild);
    // 继承基本提示框init方法
    Alert.prototype.init.call(this);
}






















