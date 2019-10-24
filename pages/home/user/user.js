// pages/home/user/user.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navButton: [{
      link: "",
      text: "待参加",
      num: "0",
      type:'take_un'
    }, {
      link: "",
      text: "已参加",
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
      link: '/pages/myActivity/myActivity',
      text: "我的活动",
      id: 1,
      imgurl: "/assets/images/home/hd.png"
    }, {
      link: '/pages/index/index',
      text: "活动规则",
      id: 2,
      imgurl: "/assets/images/home/gz.png"
    }, {
      link: '/pages/userCenter/userCenter',
      text: "个人资料",
      id: 3,
      imgurl: "/assets/images/home/zl.png"
    }, {
      link: '/pages/login/login',
      text: "商家入驻",
      id:4,
      imgurl: "/assets/images/home/rz.png"
    }],
    "nickname": "昵称",
    "headimgurl": "upload/image/20190819/1565960577.png",
    "credit": 100,
    "take_un": 10,
    "take_alr": 20,
    "take_off": 30,
    "take_foc": 40,
    "balance": 50.01,
    "store": {
      "is_login": 1,
      "has_store": 1,
      "audit_status": 2
    },
    injectionData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    app.wxRequest({
      url:'index/index/info',
      success:(res)=>{
        this.setData({
          ...res.info,
          injectionData:res.info
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.getTabBar().setData({
      selected: 2
    })
  },

  goToUrl: function(e) {
    const data = e.currentTarget.dataset;
    if (data.id == 4){
      let url = '/pages/login/login';
      if (this.data.store.is_login === 1){
        url = '/pages/businessUser/businessUser';
      }
      wx.navigateTo({
        url: url,
      })
    }else{
      wx.navigateTo({
        url: data.url,
      })
    }
    
  },
  getCash(){
    //发起网络请求
    wx.request({
      url: 'https://juaa.shu0.cn',
      method:'post',
      data: {
        code: 123
      },
      success(){
        wx.showToast({
          title: '提现成功',
          // icon: 'loading',
          duration: 1000
        });
      }
    })
    
  }

})