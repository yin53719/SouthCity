//app.js
App({
  onLaunch: function () {
    wx.getSetting({
      success:(res)=>{
         console.log(res);
         
        this.globalData.authorize = res.authSetting;
        if (res.authSetting['scope.userInfo']){
            wx.getUserInfo({
              success:(res)=>{
                console.log(res);
                this.globalData.iv = res.iv;
                this.globalData.userInfo = res.userInfo;
                this.globalData.encryptedData = res.globalData;
              }
            })
        }
        console.log(this.globalData)
      }
    })
  },
  globalData: {
    userInfo: null,
    authorize:{
      
    },
    iv:'',
    encryptedData:''
  }
})