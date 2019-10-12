// components/cell/cell.js
const utils = require('../../utils/util.js')



Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    type: String,
    placeholder: String,
    disable: {
      type: Boolean,
      value: false
    },
    maxlength: Number,
    items: {
      type: Array,
      value: function() {
        return []
      }
    },
    checkedbox: {
      type: String,
      value: '0'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    date: "2013.11.02"
  },
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindDateChange: function(e) {
      console.log('picker发送选择改变，携带值为', utils.dateReplace(e.detail.value, '.'))
      this.triggerEvent('dateChange', utils.dateReplace(e.detail.value, '.'))
    },
    checkboxChange: function(e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value);
      this.triggerEvent('getchecked', e.detail.value)
    },
    setCheckboxItem: function(e) {
      this.triggerEvent('boxchangeindex', {
        'index': e.target.dataset.index,
        'checked': e.target.dataset.checked
      })
    }
  }
})