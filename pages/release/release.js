
let app = getApp()

Page({
  data: {
    location: '上海',
    activityList: [{
      "type": '2男3女',
        "man_num": 2,
        "woman_num": 3,
        "begin_time": 1571554526,
        "status": 2,
        "headimgurl": [
          "upload/image/20190819/1565960577.png", "upload/image/20190819/1565960577.png"
        ],
        "store_name": "门店名称",
        "address": "门店地址1111",
        "price": 10.01,
        act_type:1
    }],
    page:1,
    limit:10
  },
  onLoad: function () {
      app.wxRequest({
        url:'index/index/store',
        data:{
          page: this.data.page,
          limit: this.data.limit,
        },
        success:(res)=>{
          this.setData({
            activityList: res.info
          })
        }
      })
  }
})