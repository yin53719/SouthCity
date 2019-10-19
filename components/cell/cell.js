// components/cell/cell.js
const utils = require('../../utils/util.js')
const app =  getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    type: String,
    placeholder: String,
    disable: {
      type: Boolean,
      value: false
    },
    maxlength: Number,
    items: {
      type: Array,
      value: function() {
        return []
      }
    },
    checkedbox: {
      type: String,
      value: '0'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dateStart: "00:00",
    dateEnd: "24:00",
    location:{
      address:''
    }
  },
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindDateChangeStart: function(e) {
      console.log('picker发送选择改变，携带值为', e)
      this.setData({
        dateStart: e.detail.value
      })
      this.triggerEvent('dateChange', e.detail.value +'-'+this.data.dateEnd)
    },
    onShow(){
      console.log();
    },
    bindDateChangeEnd: function (e) {
      console.log('picker发送选择改变，携带值为', e)
      this.setData({
        dateEnd: e.detail.value
      })
      this.triggerEvent('dateChange', this.data.dateStart + '-' + e.detail.value)
    },
    checkboxChange: function(e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value);
      this.triggerEvent('getchecked', e.detail.value)
    },
    setCheckboxItem: function(e) {
      this.triggerEvent('boxchangeindex', {
        'index': e.target.dataset.index,
        'checked': e.target.dataset.checked
      })
    },
    locationCallBack(res){
      this.setData({
        location: { ...res }
      })
    },
    // 获取地址
    getAddress(){
      if (app.globalData.authorize['scope.userLocation']){
        utils.getLocation(this)
      }else{
        wx.authorize({
          scope: "scope.userLocation",
          success: () => {
            app.globalData.authorize['scope.userLocation'] = true;
            this.getAddress();
          }
        })
      }
    }
  }
})