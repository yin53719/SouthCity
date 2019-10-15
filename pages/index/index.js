
Page({
  data: {
    motto: 'Hello World'
  },
  goIntap: function(){
    wx.switchTab({
      url: '../participate/participate'　　// 页面 A
    })
  }
})