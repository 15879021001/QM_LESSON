手写一个Promise
A+ 规范

JS 回调解决异步  出现了倒金字塔型的回调地狱
Promise A+ 规范
是一个类，接受一个构造函数  resolve reject
返回的就是promise实例

1. Promise 将executor 封装在构造函数内部，并提供resolve reject 两个函数给 executor到时回调
2. then 是同步的，跟promise 构造函数一样，属于语法的一方面,将 onResolve onRejected 存储起来，并与 this 绑定
3. executor 高阶函数才是真正的主战场,复杂 this.status  this.reason this.value 的处理