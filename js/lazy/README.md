惰性函数

编些一个函数foo，每次返回首次调用的产生日期
1. if else + 全局变量
    - 污染了全局变量
    - 每次调用时都做判断
-------------------------------
    var t
    function foo(){
        if(t) return t
        t = new Date()
        return t
    }
    console.log(foo())
    setTimeout(()=>{
        console.log(foo())
    },2000)
--------------------------------
2. 闭包
--------------------------------
    var foo = (function(){
    var t
    return function(){
        if(t) return t
        t = new Date()
        return t
    }
    })()
    console.log(foo())
    setTimeout(()=>{
        console.log(foo());
    },1000)
--------------------------------
3. 函数也是对象
--------------------------------
    function foo(){
        if(foo.t) return foo.t
        foo.t = new Date()
        return foo.t
    }
    console.log(foo())
    setTimeout(()=>{
        console.log(foo())
    },2000)

--------------------------------
4. 惰性函数
   JS 里的函数是可以重写的
--------------------------------
    var foo = function () {
        var t = new Date()
        foo = function(){
            return t
        }
        return foo()
    }
    console.log(foo())
    setTimeout(()=>{
        console.log(foo())
    },2000)
--------------------------------
    