// components/userTop/userTop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: String
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
    type:"1"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
