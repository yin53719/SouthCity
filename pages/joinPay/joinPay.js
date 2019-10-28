
const app = getApp();
const chooseLocation = requirePlugin('chooseLocation');
let plugin = requirePlugin('routePlan');
const key = 'H3GBZ-6CV6I-H4CGI-5CIDB-KWZ5K-E2BBU'; //使用在腾讯位置服务申请的key
const referer = '南宁同城信息网'; //调用插件的app的名称

Page({

  /**
   * 页面的初始数据
   */
  data: {
        items: [{ name: 'USA', value: '是' },
        { name: 'CHN', value: '否', checked: 'true' }
        ],
    begin_time:'2019-10-28',
    "id": 1,
    "store_name": "名称",
    "type_name": 1,
    "phone": 13000000001,
    "address": "门店地址",
    "longitude": "200.321",
    "latitude": "563.001",
    "start_time": "08:00",
    "end_time": "23:00",
    "img": "upload/image/20190819/1565960577.png",
    "views": 20,
    "price": 10.01,
     public:1,
		"detail": [
      {
        "type": "1男1女",
        "content": "啤酒1瓶"
      },
      {
        "type": "2男2女",
        "content": "啤酒2瓶"
      }
    ],
    "combo": [
     
        "1男1女", "2男2女"

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.navArrayObj)
    app.wxRequest({
      url: 'index/index/storedetail',
      data: {
        id:options.id
      },
      success: (res) => {
        this.setData({
          ...res.info, type_name: app.globalData.navArrayObj[res.info.type]
        })
      }
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      begin_time: e.detail.value
    })
  },
  goHome(){
    wx.reLaunch({
      url: '../participate/participate',
    })
  },
  wxpay(res){
    app.wxRequest({
      url:'index/index/storesubmit',
      data:{
        begin_time: new Date(this.data.begin_time).getTime()/1000,
        public: this.data.public,
        id:this.data.id,
        type: this.data.type
      },
      success:(res)=>{
        wx.requestPayment({
           ...res.info,
          success:function(res){
            console.log(res)
          }
        })
      }
    })
  },
  // 打电话
  makePhoneCall(e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phonenumber //仅为示例，并非真实的电话号码
    })
  },
  // 导航，获取定位,选点
  goLocation(e) {
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