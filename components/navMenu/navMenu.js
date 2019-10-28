const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  
  /**
   * 组件的初始数据
   */
  data: {
    navArray:[{
      name:'全部',
      type:0
      }],
      navType:0,
      navStatusArray:[{
        name:'热门聚会',
        type:'hot',
        status:0
      },{
        name:'距离最近',
        type:'location',
        status:1
      },{
        name:'价格最低',
        type:'price',
        status:0
      },{
        name:'综合排序',
        type:'sort',
        status:0
      }]

  },
  created() {
    app.wxRequest({
      url: 'index/tool/typelist',
      success:(res)=>{
        let list = this.data.navArray;
        for (let i in res.info) {
          list.push({
            type: i,
            name: res.info[i]
          });
        }
        this.setData({
          navArray: list
        })

        app.globalData.navArrayObj = res.info;
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    navTap: function (e) {
        this.setData({
          navType: e.target.dataset.type
        })
        this.triggerEvent('mynavevent',{
          type:1,
          navType:e.target.dataset.type
        })
    },
    navStatusHandle: function (e) {
      let i = e.currentTarget.dataset.index;
      let status = this.data.navStatusArray[i].status;
      if(status == 0){
         status = 1
      }else{
        status = 0
      }
      let navStatusArray = this.data.navStatusArray;
          navStatusArray[i].status = status;
        this.setData({
          navStatusArray
        });

        this.triggerEvent('mynavevent',{
          type:2,
          navStatusArray
        })
    }
  }
})
