// 图片轮播类
var LoopImages = function (imgArr, container) {
    this.imageArray = imgArr; //轮播图片数组
    this.container = container; //轮播图片容器
}

LoopImages.prototype = {
    // 创建轮播图片
    createImage: function () {
        console.log('LoopImages createImage function');
    },
    // 切换下一张图片
    changeImage: function () {
        console.log('LoopImages changeImage function');
    }
}

// 上下滑动切换类
var slideLoopImg = function (imgArr, container) {
    // 构造函数继承图片轮播类
    LoopImages.call(this, imgArr, container);
}

slideLoopImg.prototype = new LoopImages();
// 重写继承的切换下一张图片方法
slideLoopImg.prototype.changeImage = function (){
    console.log('slideLoopImg changeImage function');
}
// 渐隐切换类
var FadeLoopImg = function (imgArr, container, arrow){
    LoopImages.call(this, imgArr, container);
    this.arrow = arrow;
}
FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function () {
    console.log('FadeLoopImg changeImage function');
}
// 测试用例
var fadeImg = new FadeLoopImg(['01.png','02.png','03.png','04.png'],'fade')
console.log(fadeImg.container);
fadeImg.changeImage()


















