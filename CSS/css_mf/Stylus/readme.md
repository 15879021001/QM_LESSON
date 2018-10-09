- stylus
  css 预编译系统  语法规则
  写的 .styl文件 ，stylus编译成css文件
  1. 省去很多的约定
    输入 stylus style.styl -o css.css  生成css.css
    使用 stylus编译  .styl文件 输出到 css.css文件

    
    使用 stylus构建CSS开发工作流程
    代码在 .styl文件中
    浏览器需要的是.css文件
    输入 stylus -w style.styl -o style.css
    live-server会监听css文件的改变自动刷新页面