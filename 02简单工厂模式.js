function createPop(text, type){
    var o = new Object();
    o.content = text;
    o.show = function(){
      //显示方法
    };
    if(type == 'alert'){
        //警告
        console.log('警告')
    }
    if(type == 'prompt'){
        //提示
        console.log('提示')
    }
    if(type == ''){
        //确认
        console.log('确认')
    }
    return o;
}

var alert = new createPop('警告提示','alert')
