
let app = getApp()

Page({
  data: {
    location: '上海',
    keyword:'',
    order:1,
    act_type:0,
    activityList: [],
    page:1,
    limit:10
  },
  onLoad: function () {
    this.getPageList();
  },
  getPageList(){
    app.wxRequest({
      url: 'index/index/store',
      data: {
        page: this.data.page,
        limit: this.data.limit,
        keyword: this.data.keyword,
        order: this.data.order,
        act_type: this.data.act_type
      },
      success: (res) => {
        this.setData({
          activityList: res.info
        })
      }
    })
  },
  onMyNavEvent(e) {
    // type === 1 一级导航 2  二级导航
    if (e.detail.type === 1) {
      this.setData({
        type: e.detail.navType
      })
    } else {
      let navType = {};
      for (let i = 0; i < e.detail.navStatusArray; i++) {
        let item = e.detail.navStatusArray;
        navType[item.type] = item.status;
      }
      this.setData({
        postData: {
          ...this.data.postData, ...navType
        }
      })
      this.getPageList()
    }
  },
  bindinput(e) {

    this.setData({
      keyword: e.detail.value
    })
    
  },
  bindconfirm(e){
    this.getPageList();
  }
})