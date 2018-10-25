1. page.json  usingComponent 申明要的组件
  wxml 文件由组件组成
2. van-search 用法
    组件是代表着一堆在其内部的标签或子组件，进行统一的组件功能
    - 外部 wxml 调用组件
    - 组件的内部 vant 内部，在使用时不用操作
    - 内外交流 props
      定制性， show-action  use-action-slot
3. slot 插槽
   让组件内部，插上一个位置标记，调用组件时，将定制标签传到这个slot，实现了组件的定制