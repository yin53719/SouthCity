// pages/userCenter/userCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkBoxItems: [{
        name: '帅哥',
        code: '1',
        checked: false,

      },
      {
        name: '可爱',
        code: '2',
        checked: true,

      },
      {
        name: '大方',
        code: '3',
        checked: true,

      },
      {
        name: '温柔体贴',
        code: '4',
        checked: true,

      },
      {
        name: '美丽',
        code: '5',
        checked: true,

      },
      {
        name: '温柔',
        checked: true,
        code: '6'
      }
    ],
    birthDay: '2013.01.12',
    bitList:[]
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

  dateChange(val) {
    console.log(val)
    this.setData({
      birthDay: val.detail
    })
  },
  boxchangeindex: function(e) {
    const temp = `checkBoxItems[${e.detail.index}].checked`
    this.setData({
      [temp]: !e.detail.checked
    })
  },
  getchecked: function(e) {
    this.setData({
      bitList: e.detail
    })
  }
})