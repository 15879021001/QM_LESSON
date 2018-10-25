//index.js
// 数据库是mongodb的 database 是sdk
const db = wx.cloud.database()
const book = db.collection('mybook')
const _ = db.command

const app = getApp()

Page({
  data: {
    book_list: []
  },

  onLoad: function (options) {

    // 数据库sql select * from mybook 关系型
    // mongodb nosql  db.find({}) 

    db.collection('mybook').get({
      success: res => {
        this.setData({
          book_list: res.data
        
        })

      }
    })

  },

})