
const GlobaleConfig = require('../../utils/config')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    packages:[],
    cardUrl:'/assets/images/home/guanggaotu.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let packages = [];
     for(let i=1;i<11;i++){
        packages.push({
          text:'',
          num:i
        })
     }

     this.setData({
       packages
     })
  },
  
  // 上传营业执照
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
          success (res){
            const data = res.data;
            console.log(res.data)
            that.setData({
              cardUrl: data.info.url
            })
          }
        })
        
      }
    })
  },
  gotolink(){
    wx.reLaunch({
      url: '/pages/businessUser/businessUser',
    })
  }
})