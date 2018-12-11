// 1.全局执行上下文 全局执行上下文 压入上下文栈
// 2.全局执行上下文
// 3.创建函数执行上下文， checkscope入栈
// 4.函数运行后  this 创建变量  作用域链
// 5.checkscope 函数执行完毕 checkscope 执行上下文 从上下文栈中弹出
// 6.执行f函数，创建了f函数执行和上下文，f函数执行上下文被压入执行上下文栈
// 7.f 执行上下文环境，作用域链this
var scope = 'global scope'
function checkscope(){
    var scope = 'local scope'
    // console.log(scope+'1')
    function f(){
        return scope
    }
    return f
}
// console.log(scope)
var foo = checkscope()
console.log(foo())

// checkscopeContext(){
//     scope:[AO,global.VO]
// }

