//index.js
//获取应用实例
const app = getApp()
// const QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
// const chooseLocation = requirePlugin('chooseLocation');
// let key = 'H3GBZ-6CV6I-H4CGI-5CIDB-KWZ5K-E2BBU';  //使用在腾讯位置服务申请的key
// let referer = '南宁同城信息网';   //调用插件的app的名称
// let endPoint = JSON.stringify({  //终点
//   'name': '吉野家(北京西站北口店)',
//   'latitude': 39.89631551,
//   'longitude': 116.323459711
// });
// var qqmapsdk;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  goIntap: function(){
    wx.navigateTo({
      url: '../participate/participate?user_id=111'　　// 页面 A
    })
  },
  //事件处理函数
  bindViewTap: function() {
    // console.log(11);
    // wx.navigateTo({
    //   url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    // });
 
  },
  onLoad: function () {
    // 实例化API核心类
    // qqmapsdk = new QQMapWX({
    //   key: 'H3GBZ-6CV6I-H4CGI-5CIDB-KWZ5K-E2BBU'
    // });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log(res)
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShow: function () {
    // 调用接口
    // const location = chooseLocation.getLocation();
  }
})
