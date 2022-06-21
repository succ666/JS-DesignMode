var Marrystste = function () {
    // 内部状态私有变量
    var _currentstate = {},
        // 动作与状态方法映射
        states = {
            jump: function () {
                console.log('jump');
            },
            move: function () {
                console.log('move');
            },
            shoot: function () {
                console.log('shoot');
            },
            squat: function () {
                console.log('squat');
            }
        };
    // 动作控制类
    var Action = {
        // 改变状态方法
        changestate: function () {
            // 组合动作通过传递多个参数实现
            var arg = arguments;
            // 重置内部状态
            _currentstate = {};
            // 如果有动作则添加动作
            if(arg.length){
                //遍历动作
                for(var i = 0, len = arg.length; i < len; i++){
                    // 向内部状态中添加动作
                    _currentstate[arg[i]] = true
                }
            }
            // 返回动作控制类
            return this;
        },
        // 执行动作
        goes: function () {
            console.log('触发一次动作');
            // 遍历内部状态保存的动作
            for (var i in _currentstate) {
                // 如果该动作存在则执行
                states[i] && states[i]();
            }
            return this;
        }
    }
    // 返回接口方法 change、gose
    return {
        change: Action.changestate,
        gose: Action.goes
    }
}

var marry = new Marrystste();
marry.change('jump','shoot').gose().gose()

















