
const QQMapWX = require('../../utils/qqmap-wx-jssdk.js');


Page({
  data: {
    location: '上海',
    navArray: [{
      name: '全部',
      type: 0
    }, {
      name: 'KTV',
      type: 1
    }, {
      name: '酒吧',
      type: 2
    }, {
      name: '美食',
      type: 3
    }, {
      name: '景点',
      type: 4
    }, {
      name: '网吧',
      type: 5
    }],
    navType: 0
  },
  navTap: function (navType) {
    console.log(navType.target)
    this.setData({
      navType: navType.target.dataset.type
    })
  },
  onLoad: function () {


    var that = this;

    //1.2实例化腾讯地图API核心类
    that.globalData.qqmapsdk = new QQMapWX({
      key: 'H3GBZ-6CV6I-H4CGI-5CIDB-KWZ5K-E2BBU'
    });
    //1.3wx.getLocation方法获取当前位置坐标。
    wx.getLocation({
      altitude: false,
      success: function (res) {
        console.log(res)
        var latitude = res.latitude;
        var longitude = res.longitude;

        that.globalData.location = {

          latitude: latitude,
          longitude: longitude
        }

        that.globalData.qqmapsdk.reverseGeocoder({       //qqmapsdk.reverseGeocoder

          location: {
            latitude: that.globalData.location.latitude,
            longitude: that.globalData.location.longitude
          },
          success: function (res) {
            console.log(res)
            var address = res.result.address_component.city;

            that.setData({

              location: address

            });

          },
          fail: function (res) {

            wx.showToast({
              title: '解析地址错误',
              icon: 'loading',
              duration: 1000
            });

          },

        })

      }
    });

  },
  globalData: {
    url: ''
  }
})