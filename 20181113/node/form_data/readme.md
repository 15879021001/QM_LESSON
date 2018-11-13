1. Backend
    Web Server 硬件服务器 || php java 等语言 后端服务器运用程序
    基础：
        提供 HTTP 访问 http://
    127.0.0.1  IP => domain  baidu.com
    3000 端口

2. 类事件的概念
    - 创建一个服务器
    http.createServer((req,res) =>{

    })
    - 对Server 进行事件监听
    server.listen(post,ip,()=>{

    })