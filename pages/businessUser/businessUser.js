const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navButton: [{
      link: "",
      text: "待举办",
      num: "0"
    }, {
      link: "",
      text: "待参加",
      num: "0"
    }, {
      link: "/pages/myFollow/myFollow",
      text: "已关注",
      num: "0"
    }, {
      link: "",
      text: "未举办",
      num: "0"
    }],
    buttonList: [{
      link: '/pages/businessPackage/businessPackage',
      text: "我的套餐",
      imgurl: "/assets/images/home/taocan.png"
    }, {
        link: '/pages/businessActivity/businessActivity',
      text: "我的接待",
        imgurl: "/assets/images/home/jiedai.png"
    }, {
        link: '/pages/businessData/businessData',
      text: "商家资料",
      imgurl: "/assets/images/home/ziliao.png"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  goToUrl: function (e) {
    const data = e.currentTarget.dataset
    wx.navigateTo({
      url: data.url,
    })
  },
  getCash(){
    app.wxRequest({
      url:'index/store/info',
      success(){
        wx.showToast({
          title: '提现成功',
        })
      }
    })
  }
})