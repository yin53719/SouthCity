

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
      status: "活动招募中",
      message: "缺1男2女",
      manAllNum: "3",
      manNum: "1",
      womanAllNum: "3",
      womanNum: "1",
    }, {
      title: "佰分迪KTV娱乐会所",
      local: "南宁市青秀区厢竹大道5号",
      time: "2019.9.15  20:00 - 12:00",
      label: [
        "KTV",
        "3男3女",
        "68元/男"
      ],
      status: "活动招募中",
      message: "缺1男2女",
      manAllNum: "3",
      manNum: "1",
      womanAllNum: "3",
      womanNum: "1",
    }, {
      title: "佰分迪KTV娱乐会所",
      local: "南宁市青秀区厢竹大道5号",
      time: "2019.9.15  20:00 - 12:00",
      label: [
        "KTV",
        "3男3女",
        "68元/男"
      ],
      status: "活动招募中",
      message: "缺1男2女",
      manAllNum: "10",
      manNum: "4",
      womanAllNum: "4",
      womanNum: "3",
    }, {
      title: "佰分迪KTV娱乐会所",
      local: "南宁市青秀区厢竹大道5号",
      time: "2019.9.15  20:00 - 12:00",
      label: [
        "KTV",
        "3男3女",
        "68元/男"
      ],
      status: "活动招募中",
      message: "缺1男2女",
      manAllNum: "10",
      manNum: "4",
      womanAllNum: "4",
      womanNum: "3",
    }, {
      title: "佰分迪KTV娱乐会所",
      local: "南宁市青秀区厢竹大道5号",
      time: "2019.9.15  20:00 - 12:00",
      label: [
        "KTV",
        "3男3女",
        "68元/男"
      ],
      status: "活动招募中",
      message: "缺1男2女",
      manAllNum: "10",
      manNum: "4",
      womanAllNum: "4",
      womanNum: "3",
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