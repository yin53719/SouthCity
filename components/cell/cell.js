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
   
    name: String,
    disable: {
      type: Boolean,
      value: false
    },
    maxlength: Number,
    items: {
      type: Array,
      name: String
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
    },
    phone: '',
  },
  options: {
    addGlobalClass: true
  },
  ready(){
    console.log(this.placeholder.phone)
    this.setData({
      phone:this.data.placeholder
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindinput(e){
        this.triggerEvent('inputChange',{
          value:e.detail.value,
          name: e.target.dataset.name
        })

        this.setData({
          ...this.data, [e.target.dataset.name]:e.detail.value
        })
    },
    bindDateChangeStart: function(e) {
      this.setData({
        dateStart: e.detail.value
      })
      this.triggerEvent('dateChangeStart', e.detail.value)
    },
    bindDateChangeEnd: function (e) {
      this.setData({
        dateEnd: e.detail.value
      })
      this.triggerEvent('dateChangeEnd',e.detail.value)
    },
    setCheckboxItem: function(e) {
      let items = this.data.items;
      console.log(e)
      for (let i =0;i< items.length;i++){
        if (i == e.target.dataset.index){

          items[i].checked = !items[i].checked
          continue;
        }
        items[i].checked = false;
      }
    
       this.setData({
         items
       })

      this.triggerEvent('boxchangeindex', {
        'index': e.target.dataset.index
      })
    },
    // 获取地址
    getAddress(){
      utils.getLocation((res)=>{
        this.setData({
          location: { ...res }
        })
        this.triggerEvent('getLocation', res)
      })
    },
    getCode(){
      console.log(this.data.placeholder)
      let phone = this.data.phone || this.data.placeholder
      if (!phone) {
        wx.showToast({
          title: '手机号码必填',
        })
        return false;
      }
      app.wxRequest({
        url: 'index/index/sendsms',
        method: 'post',
        data: {
          phone: phone
        },
        success: (res) => {
          if (res.code === 1) {
            wx.showToast({
              title: res.msg
            })
          }
        }
      })
    }
  }
})