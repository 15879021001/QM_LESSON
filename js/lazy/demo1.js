// if else + 全局变量
var t

function foo() {
    if (t) return t
    t = new Date()
    return t
}
console.log(foo())
setTimeout(() => {
    console.log(foo())
}, 1000)


