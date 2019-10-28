
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
      keyword:"",//搜索框
      locationType:0,
      priceType:1,
      sortType:0,
      page:1,
      limit:10
    },
    activityList: [],
    searchValue: '',
    banner:''
  },
  onLoad: function () {
    console.log(app.globalData.openid);
    app.wxRequest({
      url:'index/login/banner',
      success:(res)=>{
          this.setData({
            banner: res.info.banner
          })
      }
    })
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
                  this.getPageList()
                }
              })
            }
          })
        }
      })
      
    }
  
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
          type:e.detail.navType
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
    app.wxRequest({
      url:'index/index/publish',
      data:{
        page: this.data.page,
        limit: this.data.limit,
        keyword: this.data.keyword,
        order: this.data.order,
        act_type: this.data.act_type
      },
      success:(res)=>{
        this.setData({
          activityList:res.info
        })
      }
    })
  },
  bindinput(e){
    this.setData({
      keyword: e.detail.detail
    })
    this.getPageList();
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom(){
    this.getPageList()
  }
})