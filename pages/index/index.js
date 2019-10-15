
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  goIntap: function(){
    wx.switchTab({
      url: '../participate/participate'　　// 页面 A
    })
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function() {
     console.log(getApp())
  },
  onShow: function() {
    
    // 调用接口
    // const location = chooseLocation.getLocation();
  }
})