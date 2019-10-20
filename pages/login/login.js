let plugin = requirePlugin('routePlan');
const chooseLocation = requirePlugin('chooseLocation');
const app = getApp();
const key = 'H3GBZ-6CV6I-H4CGI-5CIDB-KWZ5K-E2BBU'; //使用在腾讯位置服务申请的key
const referer = '南宁同城信息网'; //调用插件的app的名称
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch: '0', //0登录  1注册,
    type:1,
    postData:{
      address:'',
      licence:'/assets/images/login/uploadcard.png',
      account:'111111',
      password:'123456',
      repassword:'123456',
      name:'南城同城信息网',
      contact:'12345',
      phone:'17717038360',
      code:'9527'
    },
    start_time: '00:00',
    end_time: '24:00',
    isClickChooseLocation:false,
    project:[]
  },
  onLoad() {
    app.wxRequest({
      url: 'index/tool/typelist',
      success: (res) => {
        let list = this.data.project;
        for (let i in res.info) {
          list.push({
            id: i,
            val: res.info[i]
          });
        }
        this.setData({
          project: list
        })
      }
    })

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const location = chooseLocation.getLocation();
    // 腾讯内置导航
    if(location && this.data.isClickChooseLocation){
      // let postData = {}
      this.setData({
        isClickChooseLocation:false,
        postData:{
          ...this.data.postData, 
          address:location.address,
          longitude: location.longitude,
          latitude: location.latitude
        }
      })

    }
  },
  // 获取验证码
  getCode(){
    let phone = this.data.postData.phone
    if (!phone){
      wx.showToast({
        title: '手机号码必填',
      })
      return false;
    }
    app.wxRequest({
      url: 'index/index/sendsms',
      method:'post',
      data:{
        phone:phone
      },
      success: (res) => {
        if(res.code === 1){
          wx.showToast({
            title:res.msg
          })
        }
      }
    })
  },
  // 改变下拉选项
  bindPickerChange: function (event) {
    this.setData({   //给变量赋值
      idx: event.detail.value,
    })
  },
  changeSwitch(e) {
    this.setData({
      switch: e.target.dataset.type
    })
  },
  bindDateChangeStart: function(e) {
    this.setData({ start_time:e.detail.value})
  },
  bindDateChangeEnd: function (e) {
    this.setData({ end_time: e.detail.value })
  },
  // 上传营业执照
  uploadCard(){
    const that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: app.globalData.domain + 'index/tool/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = JSON.parse(res.data);
            console.log(data)
            that.setData({
              postData:{
                ...that.postData, 
                licence: app.globalData.domain + data.info.url
              }
            })
          }
        })
      }
    })
  },
  login(){
    app.wxRequest({
      method: 'post',
      url: 'index/store/login',
      data:{
        account:this.data.postData.account,
        password:this.data.postData.password
      },
      success:()=>{
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
        wx.navigateTo({
          url: "/pages/businessUser/businessUser"
        })
      }
    })
    
  },
  registered(){
    app.wxRequest({
      url: 'index/store/register',
      method:'post',
      data:{
        ...this.data.postData,
        start_time: this.data.start_time,
        end_time: this.data.end_time,
        type:this.data.type
      },
      success:(res)=>{
        console.log(res);
        wx.navigateTo({
          url: "/pages/businessPackage/businessPackage"
        })
      }
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
    
  },
  bindinput(e){
    this.setData({
      postData:{
        ...this.data.postData, [e.target.dataset.name]: e.detail.value
      }
    })
  }
})