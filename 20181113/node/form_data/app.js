const http = require('http');
const fs = require('fs'); //引入FS模块
const querystring = require('querystring');
const infos = {
    "123":{
        username:"taokun",
        sex:"男"
    },
    "456":{
        username:"taokun2",
        sex:"男"
    }
}
// node是如何提供http服务的呢

const server = http.createServer((req, res) => {
    if (req.url === '/rhino.png') {
        const png = fs.readFileSync('./rhino.png');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/png');
        res.end(png);
        return;
    }

    if (req.url.indexOf('/getInfo') >= 0) {
        const qs = req.url.split('?')[1];
        console.log(qs);
        const params = querystring.params(qs);
        console.log(params);
        const id = params.id;
        console.log(id);

        const info = infos[id]||{};


        res.statusCode = 200;
        
        res.end(JSON.stringify(info));
        return;
        
    }

    const index = fs.readFileSync('./index.html', 'utf-8') //读取 index.html
    // 提供访问
    // 有两个对象
    // req 请求对象
    // res 服务结果对象
    res.statusCode = 200; //http请求成功
    res.setHeader('Content-Type', 'text/html');
    res.end(index);

});
// 端口3000，地址：本地
server.listen(3000, '127.0.0.1', () => {
    console.log('服务器已启动');

})