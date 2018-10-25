- 文件上传
    云服务器
    node(npm node v8.0 > koa) 运行环境及操作系统（linux centos）

    云服务全部sdk化
    数据存储wx.cloud.database
    文件存储 wx.cloud.uploadFile

    wx.cloud.uploadFile({
        cloudPath:...,  打开文件可写流
        filePath:...,   打开文件可读流
    })

    云函数 wx.cloud.callFunction