const app = getApp();
const utils = require('../../utils/util')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    injectionData: {
      type: Object,
      default: {},
    },
    type: { //type==1 我的活动   用这个type控制样式
      type: String,
      default: '1'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
     afterObj:{
       "type": "1男1女",
       "man_num": 2,
       "woman_num": 3,
       "begin_time": 1571554526,
       "status": 2,
       "headimgurl": [
         "upload/image/20190819/1565960577.png", "upload/image/20190819/1565960577.png"
       ],
       "name": "门店名称",
       "address": "门店地址",
       "price": 10.01,
       "act_type": 1
     },
    statusObj:{
      1:'预定',
      2:'招募中',
      3:'人数已满',
      4:'结束',
      5: '结束'
    }
  },
  attached(){
    // console.log(this.data.injectionData);
    let afterObj = this.data.injectionData;
    afterObj.begin_time = utils.formatTime(new Date());
    afterObj.status = this.data.statusObj[afterObj.status];
    afterObj.message = `缺${afterObj.man_num}男${afterObj.woman_num}女`
    console.log(afterObj)
    this.setData({
      afterObj: afterObj
    })
    app.wxRequest({
      url: 'index/tool/typelist',
      success: (res) => {
        console.log(res);
        this.setData({
          afterObj: {
            ...this.data.afterObj, type_name: res.info[afterObj.act_type || afterObj.type]
          }
        })
      }
    })
  },
  options: {
    addGlobalClass: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goJoin:function(event){
      console.log(event)
      if (this.data.type == 1){
        wx.navigateTo({
          url: '/pages/join/join?id='+event.target.dataset.id,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      }
      if (this.data.type == 2){
        wx.navigateTo({
          url: '/pages/join/join?id='+event.target.dataset.id,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      }
      if (this.data.type == 3) {
        wx.navigateTo({
          url: '/pages/joinPay/joinPay?id='+event.target.dataset.id,
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
      if (this.data.type == 4){
        wx.navigateTo({
          url: '/pages/join/join?id='+event.target.dataset.id,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      }
      console.log(this.data.type)
    },
    scanCodeHandle(){
      wx.scanCode({
        success(res) {
          console.log(res)
        }
      })
    }
  }
})