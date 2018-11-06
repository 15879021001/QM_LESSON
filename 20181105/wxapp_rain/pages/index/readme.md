canvas 游戏及特效
小程序里canvas 大小是px

ctx + 绘图API 将绘制的细节封装出去
画布 wx.createCanvasContext()  跟web不一样的地方 它的实现使用了 IOS/Android 的一套
绘图这块封装到 utils 里
canvas-id="effect"
ctx,
画布大小 使用了解构  width scale height 
let {width,height} = this.data
drawEffect(width,height,scale,.....)

utils
    小程序里canvas 特效只是一部分，将它抽象封装，有利于将复杂部分隐去，适合多人合作
