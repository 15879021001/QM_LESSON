- 手机的尺寸 
  px 在手机端不适用
  css 像素 px    retina 750px
  硬件的物理尺寸 iphone 8 375pt
                iphone 8 plus 414pt

- 相对单位
  rem 相对于html 上设置的font-size  10rem 为手机设备的满宽
  em 单位相对于自身的font-size来的
  vh vw 不管任何设备，宽度100vw 高度 100vh 相对于设备的 满屏
  将设备宽度的十分之一作为html的 font-size ，那么 10rem就会是整屏宽


- inline-block
  用来做布局，将block元素变成 inline
  先天BUG 会有间隙

  1. 删除换行符
  2. 父盒子上设置 font-size:0; 成功的原因是 空格也还算是字符 会使块元素间有间隙
  3. 利用注释功能，将盒子间的空格注释掉




- 自适应网页RWD
  rem 相对单位 动态的生成html font-size
  结合10rem方案  flexible
  1. dom 获得 html 标签
  2. 将设备宽度的 十分之一 给 html 的 font-size
