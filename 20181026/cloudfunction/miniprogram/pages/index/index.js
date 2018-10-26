Page({
  // 云函数是独立的node环境，需经历 新建、安装依赖、上传
  // 云开发能力
  http:function(){
    // 云函数的执行是异步的
    // 异步的同步写法
    wx.cloud.callFunction({
      name:'http',
      data:{
        a:1
      }
    }).then(res=>{
      console.log((res.result));
    })
  }
})