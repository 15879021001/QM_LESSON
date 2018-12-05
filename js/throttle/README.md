Ajax Google Suggestion
猜出用户想搜索的内容
频繁的被触发
节流 在一段时间内执行一次

使用loadsh _.throttle(fn,time)

onmousemove ontouchmove 频繁触发多次
throttle 在一定时间内只执行一次
1. 使用时间戳 + 闭包
2. 使用计时器
   区别：实现的方式，体验的细节，时间戳由于是先为0 previous now-previous > wait 先执行
        setTimeout time null,在wait到点时执行，后执行