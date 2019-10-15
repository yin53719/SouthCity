// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch: '0', //0登录  1注册,
    cardUrl:'/assets/images/login/uploadcard.png'
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

  changeSwitch(e) {
    console.log(e.target.dataset)
    this.setData({
      switch: e.target.dataset.type
    })
    console.log(this.data.switch)
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为',e.detail.value)
    this.setData({businessTime:e.detail.value})
  },
  uploadCard(){
    const that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          cardUrl: tempFilePaths
        })
      }
    })
  }

})