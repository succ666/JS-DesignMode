// 相同的逻辑做抽象提取处理
// 这样代码将会更简洁，重用率也会更大，可读性更高

/**
 * 抽象
 */
function changecolor(dom, color, bg) {
    // 设置元素的字体颜色
    dom.style.color = color;
    // 设置元素的背景颜色
    dom.style.background = bg;
}
// 先抽象提取共用部分，然后将实现与抽象通过桥接方法链接在一起，实现解耦的作用

/**
 * 多元化对象
 */

// 多维变量类
// 运动单元
function speed(x, y){
    this.x = x;
    this.y = y;
}

speed.prototype.run = function (node) {
    console.log('运动起来')
}

// 着色单元
function color(cl) {
    this.color = cl;
}

color.prototype.draw = function (node) {
    node.setAttribute("style",`background:${this.color};`)
}

// 变形单元
function shape(sp) {
    this.shape = sp;
}

shape.prototype.say = function () {
    console.log('书写字体');
}

// 球类
// function Ball(x, y, c) {
//     // 实现运动单元
//     this.speed = new speed(x, y);
//     // 实现着色单元
//     this.color = new color(c);
// }

// Ball.prototype.init = function () {
//     // 实现运动
//     this.speed.run();
//     // 实现着色
//     this.color.draw();
// }

// 人类
function People(x, y, f){
    this.speed = new speed(x, y);
    this.font = new shape(f);
}
People.prototype.init = function () {
    this.speed.run();
    this.font.say();
}
//精灵类
function Spirite(x, y, c, s){
    this.speed = new speed(x, y);
    this.color = new color(x);
    this.shape = new shape(s);
}

Spirite.prototype.init = function () {
    this.speed.run();
    this.color.draw();
    this.shape.change()
}













