// components/userNavButton/userNavButton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的初始数据
   */
  data: {
    navButton: [{
      link: "",
      text: "待参加",
      num: "0"
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