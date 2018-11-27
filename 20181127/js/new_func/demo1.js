//手撸个 new 
// Otaku 类

function Otaku(name,age){
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}

Otaku.prototype.strenth = 60;
Otaku.prototype.sayYourName = function(){
    console.log('I am ' + this.name);
}

// new 
// 1.返回一个实例{}，拥有 Otaku 函数中加的那些属性
// 2.实例可以访问到Otaku.prototype 中的属性

function objectFactor(fn,...args){
    // console.log(arguments);
    var obj = {},
    Constructor = [].shift.call(arguments); 
    // console.log(arguments);
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj,arguments);
    //1.返回新的空的对象
    //2. this 要指向新的对象
    //3. 让Constructor执行
    // fn.apply(obj,...args);
    return obj
}

// 1. 构造函数
// 2. 其余是构造函数需要的参数
const didi = objectFactor (Otaku,'Kevin',18);
console.log(didi.strenth);
