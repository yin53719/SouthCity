// pages/businessUser/businessUser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navButton: [{
      link: "",
      text: "待举办",
      num: "0"
    }, {
      link: "",
      text: "待参加",
      num: "0"
    }, {
      link: "/pages/myFollow/myFollow",
      text: "已关注",
      num: "0"
    }, {
      link: "",
      text: "未举办",
      num: "0"
    }],
    buttonList: [{
      link: '/pages/businessPackage/businessPackage',
      text: "我的套餐",
      imgurl: "/assets/images/home/taocan.png"
    }, {
        link: '/pages/businessActivity/businessActivity',
      text: "我的接待",
        imgurl: "/assets/images/home/jiedai.png"
    }, {
        link: '/pages/businessData/businessData',
      text: "商家资料",
      imgurl: "/assets/images/home/ziliao.png"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  goToUrl: function (e) {
    const data = e.currentTarget.dataset
    wx.navigateTo({
      url: data.url,
    })
  },
})