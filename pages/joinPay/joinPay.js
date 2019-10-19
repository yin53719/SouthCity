const GlobaleConfig = require('../../utils/config')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
        items: [{ name: 'USA', value: '是' },
        { name: 'CHN', value: '否', checked: 'true' }
        ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goHome(){
    wx.reLaunch({
      url: '../participate/participate',
    })
  },
  wxpay(res){
    console.log(app.globalData)
  }
})