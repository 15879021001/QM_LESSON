- 小程序
 内嵌在微信APP，是WebView +微信一些APP插件的混合
 WebView App 内嵌页面技术 让App开发使用时web技术
 比Android/IOS 更快
 缺点 性能慢

 在拍照，tabbar, navigationbar 等一些关健的地方又能调用原生微信里的原生组建，提升性能
 WXML 没有 div view
 WXSS 使用弹性布局
 js MVMM

- 架构
  小程序的架构极其简单
  app.js 是入口文件
  app.json 项目配置文件  pages找到所有的页面
  1. 注册所有文件
  2. window 设置 App 名字，navigationBar背景色 文字色
  3. tabbar 如果APP需要底栏 就设置一个 tabbar

    pages 小程序由页面组成
    主要得到代码都在这

  1. WXML 写结构
  2. WXSS 写样式
  3. js 写逻辑
  4. JSON 页面部分

- 组件
  小程序提供了很多内置功能组件
  swiper 声明式组件 html标签 功能贫瘠
  组件集合了很多标签及功能
  <swiper>
    <swiper-item>
    </swiper-item>
  </swiper>

  indicator-dots={{"true"}}
  {{js 区链}}

  - 数据驱动的界面
    大前端让静态界面活起来，将直接绑定数据

    小程序为数据绑定提供了约定
    Page({
      data:{
        数据区域 -> {{}}
      }
    })

  - 指令
    wx:for  循环输出指令 配合block

  - rpx
    相对单位
    小程序为了适配所有手机，宽度就是750rpx

  - button 中的 bindtap 跳转