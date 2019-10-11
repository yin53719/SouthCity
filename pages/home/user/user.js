// pages/home/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonList: [{
      link: '/pages/myActivity/myActivity',
      text: "我的活动",
      imgurl: "/assets/images/home/hd.png"
    }, {
      link: '',
      text: "活动规则",
      imgurl: "/assets/images/home/gz.png"
    }, {
      link: '/pages/userCenter/userCenter',
      text: "个人资料",
      imgurl: "/assets/images/home/zl.png"
    }, {
      link: '',
      text: "商家入驻",
      imgurl: "/assets/images/home/rz.png"
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
    this.getTabBar().setData({
      selected: 2
    })
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

  goToUrl: function(e) {
    const data = e.currentTarget.dataset
    wx.navigateTo({
      url: data.url,
    })
  }

})