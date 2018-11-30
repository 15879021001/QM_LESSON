1. this 由函数调用方式
    调用由普通函数 对象方法  事件处理函数  闭包
2. this 作用域手动指定
call apply 区别是参数 call 序列
bind  可以实现延后执行  返回一个新函数，并且内部的this 指定为第一个参数
3. 手写一个bind
Function.prototype.bind = 

4. bind 是展示this闭包 函数式编程 原型链最直接的例子
    this:
    - apply 
        bind 是基于 apply 手动指定 this 为绑定对象的
    - 闭包区域
        this 由调用方式决定为被绑定的函数就是this  self=this 在闭包空间一直存在
5. bind 返回一个新函数 解决了事件函数的this 丢失  一般的事件listen this 指向了事件对象target
     在react 组件是开发或者面向对象有需求将事件的处理函数作为组件类的方法，即延迟调用

     apply+ 函数式
     return function(){
         self.apply(context)
     }