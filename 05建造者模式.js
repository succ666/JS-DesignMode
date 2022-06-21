// 创建一位人类
var Human = function (param) {
    // 技能
    this.skill = param && param.skill || '保密';
    // 兴趣爱好
    this.hobby = param && param.hobby || '保密';
}
//人类原型方法
Human.prototype = {
    getSkill: function () {
        return this.skill;
    },
    getHobby: function () {
        return this.hobby;
    }
}
//实例化姓名类
var Named = function (name) {
    var that = this;
    // 构造器
    // 构造函数解析姓名和姓与名
    (function(name, that){
        that.wholeName = name;
        if(name.indexOf(' ') > -1){
            that.FirstName = name.slice(0, name.indexOf(' '));
            that.secondName = name.slice(name.indexOf(' '));
        }

    })(name, that)
}
// 实例化职位类
var Work = function (work) {
    var that = this;
    // 构造器
    // 构造函数中通过传入的职位特征来设置相应职位以及描述
    (function (work, that) {
        switch (work) {
            case 'code':
                that.work = '工程师';
                that.workDescript = '每天沉醉于编程';
                break;
            case 'UI':
            case 'UE':
                that.work = '设计师';
                that.workDescript = '设计更是一种艺术';
                break;
            case 'teach':
                that.work = '教师';
                that.workDescript = '分享也是一种快乐';
                break;
            default:
                that.work = work;
                that.workDescript = '对不起，我们还不清楚您所选择职位的相关描述';
        }
    })(work, that)
}

//更换期望的职位
Work.prototype.changeWork = function (work) {
    this.work = work
}
// 添加对职位的描述
Work.prototype.changeDescript = function (setence) {
    this.workDescript = setence;
}

/**
 * 应聘者建造者
 * 参数 name: 姓名（全名）
 * 参数 work：期望职位
 * 参数 skill：技能
 * 参数 hobby：兴趣爱好
 */

var Person = function (name, work, skill, hobby) {
    // 创建应聘着缓存对象
    var _person = new Human({skill,hobby});
    // 创建应聘者姓名解析对象
    _person.name = new Named(name);
    // 创建应聘者期望职位
    _person.work = new Work(work);
    // 将创建的应聘者对象返回
    return _person;
}

var person = new Person('xiao ming', 'code','js', '睡觉');

console.log(person.getSkill())
console.log(person.getHobby())
console.log(person.name.FirstName)
console.log(person.name.secondName)
console.log(person.work.work)
console.log(person.work.workDescript)
person.work.changeWork('测试')
console.log(person.work.work)
person.work.changeDescript('测试就是好玩')
console.log(person.work.workDescript)



















