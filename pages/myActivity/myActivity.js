// pages/myActivity/myActivity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    

    activityList: [{
      title: "佰分迪KTV娱乐会所",
      local: "南宁市青秀区厢竹大道5号",
      time: "2019.9.15  20:00 - 12:00",
      label: [
        "KTV",
        "3男3女",
        "68元/男"
      ],
      status: "活动招募中",
      message: "缺1男2女",
      manAllNum: "3",
      manNum: "1",
      womanAllNum: "3",
      womanNum: "1",
    }, {
      title: "佰分迪KTV娱乐会所",
      local: "南宁市青秀区厢竹大道5号",
      time: "2019.9.15  20:00 - 12:00",
      label: [
        "KTV",
        "3男3女",
        "68元/男"
      ],
      status: "活动招募中",
      message: "缺1男2女",
      manAllNum: "3",
      manNum: "1",
      womanAllNum: "3",
      womanNum: "1",
    }, {
      title: "佰分迪KTV娱乐会所",
      local: "南宁市青秀区厢竹大道5号",
      time: "2019.9.15  20:00 - 12:00",
      label: [
        "KTV",
        "3男3女",
        "68元/男"
      ],
      status: "活动招募中",
      message: "缺1男2女",
      manAllNum: "10",
      manNum: "4",
      womanAllNum: "4",
      womanNum: "3",
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // wx.showTabBar({
    //   animation:true,
    //   success:function(){

    //   },
    //   fail:function(e){
    //     console.log(e)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

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

  }
})