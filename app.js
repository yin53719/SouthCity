
App({
  onLaunch: function () {
    // 展示本地存储能
 
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;
              
              let detail = res;
              wx.login({
                success: (res) => {
                  wx.request({
                    url: this.globalData.domain + 'index/login/index',
                    method: 'post',
                    data: {
                      code: res.code,
                      iv: detail.iv,
                      encryptedData: detail.encryptedData
                    },
                    success: (res) => {
                      this.globalData.openid = res.data.info.openid;
                    }
                  })
                }
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    openid:'',
    domain: 'https://juaa.shu0.cn/',
    navArrayObj:{}
  },
  /**
  * 封装wx.request请求
  * method： 请求方式
  * url: 请求地址
  * data： 要传递的参数
  * callback： 请求成功回调函数
  * errFun： 请求失败回调函数
  **/
  wxRequest({ method, url, params, data, success, errFun}) {
    wx.request({
      url: this.globalData.domain + url,
      method: method ? method:'post',
      params:params,
      data: data,
      header: {
        'content-type':  'application/json',
        'Accept': 'application/json',
        'Authorization':this.globalData.openid
      },
      success: function (res) {
        if(res.data.code === 1){
          success(res.data);
        }else{
          wx.showToast({
            title:res.data.msg,
            icon:'none'
          })
        }
        
      },
      fail: function (err) {
        wx.showToast({
          title: '服务异常',
          icon:'none'
        })
        errFun(err)
      }
    })
  }
})