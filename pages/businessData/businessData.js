const GlobaleConfig = require('../../utils/config')
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    "type": 1,
    "store_name": "名称",
    "address": "门店地址",
    "longitude": "1.1",
    "latitude": "2.1",
    "start_time": "08:00",
    "end_time": "23:00",
    "contact": "啊三",
    "phone": 13000000001,
    "licence": "upload/image/20190819/1565960577.png",
    checkBoxItems: [],
    do_business: '00:00-23:59',
    bitList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    app.wxRequest({
      url:'index/store/detail',
      success:(res)=>{
        let resB = res;
         this.setData({
           ...res.info, do_business: res.info.start_time +'-'+ res.info.end_time
         })
        app.wxRequest({
          url: 'index/tool/typelist',
          success: (res) => {
            let checkBoxItems = [];
            for (let x in res.info) {
              console.log(x)
              let checked = false;
              console.log(resB)
              if (resB.type == x){
                checked = true;
              }
              checkBoxItems.push({
                name: res.info[x],
                type: x,
                checked: checked
              })
            }
            console.log(checkBoxItems)
            this.setData({
              checkBoxItems
            })
          }
        })
      }
    })
  },

  inputChange(e){
      console.log(e);
      this.setData({
        [e.detail.name]:e.detail.value
      })
  },
  getLocation(res){
    this.setData({
      longitude:res.detail.longitude,
      latitude:res.detail.latitude,
      address:res.detail.address,

    })
  },
  boxchangeindex: function (e) {
    this.setData({
      type: e.detail.index+1
    })
  },
  dateChangeStart(e){
    this.setData({
      ...this.data,start_time:e.detail
    })
  },
  dateChangeEnd(e) {
    this.setData({
      ...this.data, end_time: e.detail
    })
  },
  uploadCard() {
    const that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success(res) {
        let size = res.tempFiles[0].size;
        let sizeM = size / 1024 / 1024;
        if (sizeM > 1) {
          wx.showToast({
            title: '文件不能大于2M',
            icon: 'none'
          })
          return false;
        }
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: app.globalData.domain + 'index/tool/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = JSON.parse(res.data);
            console.log(data)
            that.setData({
              licence: app.globalData.domain + data.info.url
            })
          }
        })
      }
    })
  },
  saveShop(){
    app.wxRequest({
      url: 'index/store/register',
      method:'post',
      data:{
        ...this.data
      },
      success:(res)=>{
        wx.showToast({
          title: '修改成功'
        })
        wx.navigateTo({
          url: "/pages/businessUser/businessUser"
        })
      }
    })
  }
})