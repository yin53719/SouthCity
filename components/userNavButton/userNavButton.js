// components/userNavButton/userNavButton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navButton: {
      type:Array,
      value:()=>[]
    },
  },
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToUrl: function(e) {
      const cur = getCurrentPages()[getCurrentPages().length - 1];
      const data = e.currentTarget.dataset
      if (`/${cur.route}` != data.url) {
        wx.navigateTo({
          url: data.url,
        })
      }
    }
  }
})