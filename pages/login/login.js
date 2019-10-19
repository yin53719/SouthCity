let plugin = requirePlugin('routePlan');
const chooseLocation = requirePlugin('chooseLocation');
const GlobaleConfig = require('../../utils/config')
const key = 'H3GBZ-6CV6I-H4CGI-5CIDB-KWZ5K-E2BBU'; //使用在腾讯位置服务申请的key
const referer = '南宁同城信息网'; //调用插件的app的名称
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch: '0', //0登录  1注册,
    postData:{
      address:'',
      cardUrl:'/assets/images/login/uploadcard.png',
    },
    isClickChooseLocation:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const location = chooseLocation.getLocation();
    console.log(location);
    // 腾讯内置导航
    if(location && this.data.isClickChooseLocation){
      // let postData = {}
      this.setData({
        isClickChooseLocation:false,
        postData:{
          ...this.data.postData, ...location
        }
      })

    }
  },

  changeSwitch(e) {
    console.log(e.target.dataset)
    this.setData({
      switch: e.target.dataset.type
    })
    console.log(this.data.switch)
  },
  bindDateChangestart: function(e) {
    console.log('picker发送选择改变，携带值为',e.detail.value)
    this.setData({ businessTimestart:e.detail.value})
  },
  bindDateChangeend: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({ businessTimeend: e.detail.value })
  },
  // 上传营业执照
  uploadCard(){
    const that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: GlobaleConfig.domain + 'index/tool/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = res.data;
            console.log(res)
            that.setData({
              cardUrl: data.info.url
            })
          }
        })
      }
    })
  },
  login(){
    wx.navigateTo({
      url: "/pages/businessUser/businessUser"
    })
  },
  registered(){
    wx.navigateTo({
      url: "/pages/businessPackage/businessPackage"
    })
  },
  // 导航，获取定位,选点
  goLocation(e){
    wx.getLocation({
      success:(res)=>{
        const location = JSON.stringify({
          latitude: res.latitude,
          longitude: res.longitude
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
    
  }
})