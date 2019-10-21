
const utils = require('../../utils/util.js')
const chooseLocation = requirePlugin('chooseLocation');
let plugin = requirePlugin('routePlan');
const key = 'H3GBZ-6CV6I-H4CGI-5CIDB-KWZ5K-E2BBU'; //使用在腾讯位置服务申请的key
const referer = '南宁同城信息网'; //调用插件的app的名称

Page({

  /**
   * 页面的初始数据
   */
  data: {
      isClickChooseLocation:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },



  goHome(){
    wx.reLaunch({
      url: '../participate/participate',
    })
  },
  // 打电话
  makePhoneCall(e){
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phonenumber //仅为示例，并非真实的电话号码
    })
  },
  // 导航，获取定位,选点
  goLocation(e){
    console.log(e)
    wx.chooseLocation({
      latitude: e.currentTarget.dataset.latitude,
      longitude: e.currentTarget.dataset.longitude,
      success: (res) => {

        let endPoint = JSON.stringify({  //终点
          ...res
        });

        wx.navigateTo({
          url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
        });

      }
    })

  }
})