
const QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
const GlobaleConfig = require('../../utils/config')
//1.2实例化腾讯地图API核心类
const qqmapsdk = new QQMapWX({
  key: 'H3GBZ-6CV6I-H4CGI-5CIDB-KWZ5K-E2BBU'
});
let app = getApp()
Page({
  data: {
    location:'上海',
    postData:{
      hotType:1,
      locationType:0,
      priceType:1,
      sortType:0
    },
    activityList: []
  },
  onLoad: function () {
    let activityList = [];
    for(let i=0;i<10;i++){
      activityList.push({
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
      })
    }
    this.setData({
      activityList
    })
    //1.3wx.getLocation方法获取当前位置坐标。
    if (app.globalData.authorize['scope.userLocation']) {
      this.getAddress();
    } else {
      wx.authorize({
        scope: "scope.userLocation",
        success: () => {
          app.globalData.authorize['scope.userLocation'] = true;
          this.getAddress();
        }
      })
    }
 

  },
  getAddress(){
    wx.getLocation({
      altitude: false,
      success: (res) => {
        let latitude = res.latitude;
        let longitude = res.longitude;
        app.globalData.location = {
          latitude: latitude,
          longitude: longitude
        }
        qqmapsdk.reverseGeocoder({       //qqmapsdk.reverseGeocoder
          location: {
            latitude: app.globalData.location.latitude,
            longitude: app.globalData.location.longitude
          },
          success: (res) => {
            let address = res.result.address_component.city;
            this.setData({
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
  onMyNavEvent(e){ 
    // type === 1 一级导航 2  二级导航
    if(e.detail.type === 1){
        this.setData({
          navType:e.detail.navType
        })
    }else{
      let navType = {};
      for(let i = 0;i < e.detail.navStatusArray;i++){
        let item = e.detail.navStatusArray;
        navType[item.type] = item.status;
      }
      this.setData({
        postData:{
          ...this.data.postData,...navType
        }
      })
      this.getPageList()
    }
  },
  getPageList(){
    wx.request({
      url:GlobaleConfig.domain,
      params:{
        ...this.data.postData
      },
      success:(res)=>{
        console.log(res)
      }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom(){
    this.getPageList()
  }
})