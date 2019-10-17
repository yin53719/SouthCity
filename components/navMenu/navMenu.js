// components/navMenu/navMenu.js
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
      },{
        name: 'KTV',
        type: 1
      },{
        name: '酒吧',
        type: 2
      }, {
        name: '美食',
        type: 3
      }, {
        name: '景点',
        type: 4
      }, {
        name: '网吧',
        type: 5
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
