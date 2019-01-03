react(UI) + redux(data flow) + immutable(不可变数据)

深拷贝 浅拷贝
都为拷贝，规避js 复杂对象类型引用赋值
引用赋值会让代码未来变得不可预测，不再单纯。出现二义性
结合react reducer 纯函数 ，引入immutable 来确保状态对象赋值后是全新的对象，不会影响全对象

1. 浅拷贝
  slice concat  但解决不了非数组[]

2. 嵌套对象时，如果内部没有函数的话， JSON.parse(JSON.stringify())
3. 递归思想，将一个深拷贝变为n个浅拷贝，当元素不为对象时退出 性能开销大
   
   各有优势，看情况使用
   typeof obj !== 'object'  return