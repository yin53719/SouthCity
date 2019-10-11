// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   * 
   */

  data: {
    selected: 0,
    color: "#242424",
    selectedColor: "#242424",
    list: [{
      pagePath: "/pages/participate/participate",
      iconPath: "/assets/images/home/homejoin.png",
      selectedIconPath: "/assets/images/home/homejoin.png",
      text: "参与"
    }, {
      pagePath: "/pages/home/home/home",
      iconPath: "/assets/images/home/home.png",
      selectedIconPath: "/assets/images/home/home.png",
      text: ""
    }, {
      pagePath: "/pages/home/user/user",
      iconPath: "/assets/images/home/user.png",
      selectedIconPath: "/assets/images/home/user.png",
      text: "用户"
    }]
  },
  properties: {

  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      console.log(data)
      const url = data.path
      wx.switchTab({url})
      console.log(data.index)
      this.getTabBar().setData({
        selected: data.index
      })
    }
  },

})