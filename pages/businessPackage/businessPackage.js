
const GlobaleConfig = require('../../utils/config')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[],
    title: '',
    img: '/assets/images/home/guanggaotu.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

   app.wxRequest({
     url:'index/store/getmeal',
     success:(res)=>{
       console.log(res);

       this.setData({
         ...res.info
       })
     }
   })
     
  },
  
  // 上传营业执照
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
          url: GlobaleConfig.domain + 'index/tool/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success (res){
            const data = JSON.parse(res.data);
            console.log(data)
            that.setData({
              img: GlobaleConfig.domain + data.info.url
            })
          }
        })
        
      }
    })
  },
  setPackage(){
    let data = this.data;
    if (!data.title){
      wx.showToast({
        title: '套餐标题必填',
        icon:'none'
      })
      return false;
    }
    
    let mealContent = true;
    for(let i=0;i<data.detail.length;i++){
      console.log(data.detail[i].content)
      if (data.detail[i].content && data.detail[i].content.length>0){
           mealContent = false;
           break;
        }
    }
    if (mealContent) {
      wx.showToast({
        title: '套餐内容必填，至少填写一项！',
        icon: 'none'
      })
      return false;
    }
    if (data.img.indexOf('https://') === -1) {
      wx.showToast({
        title: '套餐图片必填',
        icon: 'none'
      })
      return false;
    }
    app.wxRequest({
      url:'index/store/setmeal',
      method:'post',
      data:{
        title:this.data.title,
        img:this.data.img,
        detail:JSON.stringify(this.data.detail)
      },
      success:(res)=>{
        console.log(res);
        this.gotolink();
      }
    })
  },
  gotolink(){
    wx.reLaunch({
      url: '/pages/businessUser/businessUser',
    })
  },
  bindinput(e) {
    if (e.target.dataset.type === 'meal'){
      let detail = this.data.detail;
      detail[e.target.dataset.index].content = e.detail.value;
      this.setData({
        detail
      })
    }else{
      this.setData({
        title: e.detail.value
      })
    }
   
  }
})