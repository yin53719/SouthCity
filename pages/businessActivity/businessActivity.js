const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityList: [{
      "type": 1,
      "man_num": 2,
      "woman_num": 3,
      "begin_time": 1571554526,
      "status": 2,
      "headimgurl": [
        "upload/image/20190819/1565960577.png", "upload/image/20190819/1565960577.png"
      ],
      "name": "门店名称",
      "address": "门店地址",
      "price": 10.01
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    app.wxRequest({
      url: 'index/store/reception',
      method:'post',
      data: {
        page: 1,
        limit: 10
      },
      success: (res) => {
        console.log(res);
      }
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }
})