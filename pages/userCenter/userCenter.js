// pages/userCenter/userCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkBoxItems: [{
        name: '帅哥',
        code: '1',
        checked: false,

      },
      {
        name: '可爱',
        code: '2',
        checked: true,

      },
      {
        name: '大方',
        code: '3',
        checked: true,

      },
      {
        name: '温柔体贴',
        code: '4',
        checked: true,

      },
      {
        name: '美丽',
        code: '5',
        checked: true,

      },
      {
        name: '温柔',
        checked: true,
        code: '6'
      }
    ],
    birthDay: '2013.01.12',
    bitList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  dateChange(val) {
    console.log(val)
    this.setData({
      birthDay: val.detail
    })
  },
  boxchangeindex: function(e) {
    const temp = `checkBoxItems[${e.detail.index}].checked`
    this.setData({
      [temp]: !e.detail.checked
    })
  },
  getchecked: function(e) {
    this.setData({
      bitList: e.detail
    })
  }
})