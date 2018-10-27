
const AppId = "wxdf06df4c1006193a"
const SecretId = "AKIDQmBScgjYJsFbotvaEiBUdaM3by98ZfCe"
const SecretKey = "Ws21pTx41mMo5QnGcmlmc3FLH2c4LWms" 
// 云函数入口文件
const cloud = require('wx-server-sdk')
const fs = require('fs')
const path = require('path')
const {ImageClient} = require('image-node-sdk') 
cloud.init()
let imageClient = new ImageClient({AppId,SecretId,SecretKey})
// 云函数入口函数
exports.main = async (event, context) => {
    return await imageClient.imgPornDetect({
        formData:{
            // node 文件系统 fs rwd+ , path提供路径对象
            image: fs.createReadStream(path.join(__dirname,'./3.JPG'))
        },
        headers:{
            'content-type':'multipart/form-data'  //表单数据
        }
    })
}