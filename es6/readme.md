- this
  指针
  1. 函数的运行方式有关
  > 作为时间处理函数， this 指向事件发生的对象
  > 是箭头函数 this 指向父级的this
  > 普通函数 this 指向全局 window(前) global(后)
  > 作为对象的方法被执行 this 指向对象
    
- JS 数据类型
  > 基础类型(六种):
        数值型、字符串、布尔值、undefine、null、Symbol
    复杂数据类型给：
        Object
        数组 对象自变量 函数
        typeof 不能区分
        找个工具 ，call();
        Object.prototype.toString.call(variable);
        [object Array]

- transition

- classList
    contains add remove toggle