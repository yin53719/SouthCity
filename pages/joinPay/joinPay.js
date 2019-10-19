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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goHome(){
    wx.reLaunch({
      url: '../participate/participate',
    })
  },
  getUserInfo(res){
    console.log(1111)
    console.log(res);
    console.log(app.globalData.userInfo);
    wx.login({
      success: (res) => {
        console.log(res)
        wx.request({
          url: GlobaleConfig.domain + 'index/login/index',
          method: 'post',
          data: {
            code: res.code,
            iv: detail.iv,
            encryptedData: detail.encryptedData
          },
          success: (res) => {
            console.log(res);

          }
        })
      }
    })
  },
  bindGetUserInfoAndPay(res){
    console.log(2222)
    console.log(res);
    let detail = res.detail;
    wx.login({
      success:(res)=>{
        console.log(res)
         wx.request({
           url: GlobaleConfig.domain + 'index/login/index',
           method:'post',
           data:{
             code:res.code,
             iv: detail.iv,
             encryptedData: detail.encryptedData
           },
           success:(res)=>{
             console.log(res);
            
           }
         })
      }
    })
  }
})