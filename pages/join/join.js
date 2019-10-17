

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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const location = chooseLocation.getLocation();
    console.log(this.data.isClickChooseLocation);
    // 腾讯内置导航
    if(location && this.data.isClickChooseLocation){
      let endPoint = JSON.stringify({  //终点
          ...location
      });
      this.setData({
        isClickChooseLocation:false
      })
      wx.navigateTo({
          url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
      });
    }
    // 打开地址使用外部手机app 导航

    // const latitude = location.latitude
    // const longitude = location.longitude
    // wx.openLocation({
    //   ...location,
    //   scale: 18
    // })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

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
    const location = JSON.stringify({
      latitude: e.currentTarget.dataset.latitude,
      longitude: e.currentTarget.dataset.longitude
    });
    const category = '生活服务,娱乐休闲';
    this.setData({
      isClickChooseLocation:true
    })
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category' + category
    });
  }
})