// components/activityList/activityList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
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

  },

  options: {
    addGlobalClass: true
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})