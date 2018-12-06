#hashtag 在当前页面进行切换 本页面不会刷新
用于单页运用
hashchange 事件，组件的动态加载
#hastag => url的一部分
- 传统的地址切换有以下问题
  1. 重度依赖于http协议
        重新生成html网页
- 新时代的路由
  history api 或又hastag 不会产生页面的跳转

- history API
  url 访问，都是浏览器中的一个访问记录
  就是数据结构的栈
  pushState(null,null,'#/hello') 入栈一个浏览历史
  pop
  给我们的访问新增一个记录，但是不会刷新页面，得到一个popState事件，实现页面组件的切换
  总结：前端的路由已经成熟，既可以hash 也可以 path切换，全部交给pushState