
// pages/businessPackage/businessPackage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    packages:[],
    cardUrl:'/assets/images/home/guanggaotu.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let packages = [];
     for(let i=1;i<11;i++){
        packages.push({
          text:'',
          num:i
        })
     }

     this.setData({
       packages
     })
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
  // 上传营业执照
  uploadCard() {
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
  },
  gotolink(){
    wx.reLaunch({
      url: '/pages/businessUser/businessUser',
    })
  }
})