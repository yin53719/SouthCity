// components/userTop/userTop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type:String,
      value:'1'
    }
  },
  options: {
    addGlobalClass: true
  },
  attached() {
    console.log(this.data)

  },
  /**
   * 组件的初始数据
   */
  data: {
    type:"1",
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindGetUserInfo(e){
      console.log(e)
    }
  }
})
