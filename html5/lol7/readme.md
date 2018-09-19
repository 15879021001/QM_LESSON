- 可以使用html表达的一定不要用图

- inline 元素不能直接设置宽与高
  使用 display:inline-block;

- 使用line-height==盒子高，使文字垂直居中

- 节日活动页
- bg.jpg 是雪碧图（sprites）
  图页打开速度是 一切
  速度killer http请求
  img src、link href、script src. http都需要请求下载

- i 标签用来 小图标 展示

- infinite linear 线性匀速移动

- html css 类名很重要，需要积累词汇量

- bg_$*3 (可以用$代替数字)

- 华丽的背景会导致 页面 难写
  解决办法
  将背景分离出来，单独做
  用 bg_$*n 组合将背景铺在下面
  z-index 上下铺的关系
  z-index 默认为 1
  .bg z-index 1
  .main z-index 2
  .bg position:absolute;定位后会离开正常的文档流
  .main 会和.bg 重合