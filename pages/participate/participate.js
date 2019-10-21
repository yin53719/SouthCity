
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
    activityList: [],
    searchValue: ''
  },
  onLoad: function () {
    console.log(app.globalData.openid)
    if(!app.globalData.openid){
      wx.getUserInfo({
        success:(res)=>{
          let detail = res;
          wx.login({
            success: (res) => {
              wx.request({
                url: app.globalData.domain + 'index/login/index',
                method: 'post',
                data: {
                  code: res.code,
                  iv: detail.iv,
                  encryptedData: detail.encryptedData
                },
                success: (res) => {
                  app.globalData.openid = res.data.info.openid;
                }
              })
            }
          })
        }
      })
      
    }
    let activityList = [];
    for(let i=0;i<1;i++){
      activityList.push({
        "type": '2男3女',
        "man_num": 2,
        "woman_num": 3,
        "begin_time": 1571554526,
        "status": 2,
        "headimgurl": [
          "upload/image/20190819/1565960577.png", "upload/image/20190819/1565960577.png"
        ],
        "name": "门店名称",
        "address": "门店地址1111",
        "price": 10.01,
        act_type:1
      })
    }
    this.setData({
      activityList
    })

    this.getAddress();

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