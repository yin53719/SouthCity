

Page({
  data: {
    location: '上海',
    activityList: [{
      title: "佰分迪KTV娱乐会所",
      local: "南宁市青秀区厢竹大道5号",
      time: "2019.9.15  20:00 - 12:00",
      label: [
        "KTV",
        "3男3女",
        "68元/男"
      ],
      status: "成功接待",
      message: "N人",
      manAllNum: "3",
      manNum: "1",
      womanAllNum: "3",
      womanNum: "1",
    }]
  },
  navTap: function (navType) {
    console.log(navType.target)
    this.setData({
      navType: navType.target.dataset.type
    })
  },
  onLoad: function () {

  },
  globalData: {
    url: ''
  }
})