var Factory = function(type, content){
    if(this instanceof Factory){
        return new this[type](content);
    }else{
        return new Factory(type, content);
    }
}

Factory.prototype = {
    Java: function(content){
        console.log(content)
    },
    Php: function(content){
        console.log(content)
    },
    Python: function(content){
        console.log(content)
    }
}

