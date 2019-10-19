const GlobaleConfig = require('../../utils/config')


Page({
  /**
   * 页面的初始数据
   */
  data: {
    cardUrl: '/assets/images/login/uploadcard.png',
    checkBoxItems: [{
        name: 'KTV',
        code: '1',
        checked: false,

      },
      {
        name: '酒吧',
        code: '2',
        checked: false,

      },
      {
        name: '美食',
        code: '3',
        checked: false,

      },
      {
        name: '景点',
        code: '4',
        checked: false,

      },
      {
        name: '美丽',
        code: '5',
        checked: false,

      },
      {
        name: '电影',
        checked: true,
        code: '6'
      },
      {
        name: '网吧',
        checked: false,
        code: '7'
      }
    ],
    birthDay: '00:00-23:59',
    bitList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },


  boxchangeindex: function (e) {
    const temp = `checkBoxItems[${e.detail.index}].checked`
    this.setData({
      [temp]: !e.detail.checked
    })
  },
  getchecked: function (e) {
    this.setData({
      bitList: e.detail
    })
  },
  dateChange(e){
    console.log(e.detail)
  },
  uploadCard() {
    const that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: GlobaleConfig.domain + 'index/tool/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = res.data;
            console.log(res)
            that.setData({
              cardUrl: data.info.url
            })
          }
        })
      }
    })
  },
})