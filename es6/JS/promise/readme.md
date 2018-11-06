- 多个promise 对象如何只用一条then 链，解决异步问题，让代码同步执行
    new Promise((resolve,reject)=>{
        异步代码。。。
    })
    每个Promise对象都可以 thenable
    在then的函数中
    then(res => res.json()) 
