- 性能优化
    script 标签有 阻塞性， src 下载代码，或行内的JS并执行  不要放在头部
    页面显示， painting 绘制 排列 重绘重排
    生命周期  window.onload document   DOMContentLoaded

    JS 开始（不阻止dom的绘制，但不要等到 window.onload）
    DOMContentLoaded  domReady  img

- $(callback)
    jquery $使用用途是 dom ready事件
    $(function(){
        // js here
    })

    $(selector)用于选择元素
    动态页面
    可以不用等数据取出来，先显示页面，再去取数据，会得多