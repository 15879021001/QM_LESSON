为了封装性 易用性 代码的可读性，将弹幕的业务逻辑（独立）封装成一个类，并将其模块化
直接在浏览器端引入 export default ;
                import 模块化关键字，浏览器目前还没有支持
webpack
    test .js
        babel-loader  编译成 es5
webpack-dev-server

流程
entry(入口引入更深层次的文件)
module test loader
output(出口)

- canvas 业务逻辑模式
  render()负责画
  递归 requestAnimationFrame()

- barrage 集合
    那些可以画？
    video.currentTime >= time
    render()
