new 到底做了什么
let p = new Person();
p 是 Object类型,Person是函数类型 typeof
1. Parent 被执行
2. p.__proto__ 指向 Person.prototype p继承了Parent.prototype 中的属性和方法