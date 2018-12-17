1. 初始化项目 npm init -y
2. 添加babel
   yarn add @babel/cli @babel/core @babel/plugin-proposal-class-properties              @babel/plugin-proposal-decorators

装饰器可以方便的将一些方法或属性添加给对象，装饰下
写法：
@function
class Target
- class 被装饰后拥有了target属性
    babel 编译，看看是否有这个属性
    