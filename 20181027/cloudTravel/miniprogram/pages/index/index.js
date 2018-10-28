wx.cloud.init({})
const db = wx.cloud.database();
Page({
  data: {
    ads: [],
    item: {
      user: {
        avator: '',
        nickname: 'taotao',
        summary: '红红恍恍惚惚'
      }

    }
  },
  onLoad: function () {
    db.collection("ads").get({
      success: res => {
        this.setData({
          ads: res.data
        })
        wx.cloud.callFunction({
          name: "getTravelInfo",
          data: {
            count: 5,
            startIndex: 0
          },
          success: res => {
            console.log(res);
          }
        })
      }
    })
  }
})