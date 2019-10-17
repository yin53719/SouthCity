// pages/businessData/businessData.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardUrl: '/assets/images/login/uploadcard.png',
    checkBoxItems: [{
        name: 'KTV',
        code: '1',
        checked: false,

      },
      {
        name: '酒吧',
        code: '2',
        checked: false,

      },
      {
        name: '美食',
        code: '3',
        checked: false,

      },
      {
        name: '景点',
        code: '4',
        checked: false,

      },
      {
        name: '美丽',
        code: '5',
        checked: false,

      },
      {
        name: '电影',
        checked: true,
        code: '6'
      },
      {
        name: '网吧',
        checked: false,
        code: '7'
      }
    ],
    birthDay: '00:00-23:59',
    bitList: []
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
  boxchangeindex: function (e) {
    const temp = `checkBoxItems[${e.detail.index}].checked`
    this.setData({
      [temp]: !e.detail.checked
    })
  },
  getchecked: function (e) {
    this.setData({
      bitList: e.detail
    })
  },
  dateChange(e){
    console.log(e.detail)
  },
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
})