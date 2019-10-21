const utils = require("../../utils/util.js")
let plugin = requirePlugin('routePlan');
const chooseLocation = requirePlugin('chooseLocation');
const app = getApp();
const key = 'H3GBZ-6CV6I-H4CGI-5CIDB-KWZ5K-E2BBU'; //使用在腾讯位置服务申请的key
const referer = '南宁同城信息网'; //调用插件的app的名称
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switchT: '1', //0登录  1注册,
    idx: "1",
    passwordSee: true,
    password2See: true,
    repasswordSee: true,
    postData: {
      address: '',
      licence: '/assets/images/login/uploadcard.png',
      account: '',
      password: '',
      repassword: '',
      name: '南城城信息网',
      contact: '',
      phone: '',
      code: ''
    },
    start_time: '00:00',
    end_time: '24:00',
    isClickChooseLocation: false,
    project: [],
    canGetCode: true,
    getCodeTime: 5 * 60 * 1000
  },
  onLoad() {
    app.wxRequest({
      url: 'index/tool/typelist',
      success: (res) => {
        let list = this.data.project;
        for (let i in res.info) {
          list.push({
            id: i,
            val: res.info[i]
          });
        }
        this.setData({
          project: list
        })
      }
    })

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const location = chooseLocation.getLocation();
    // 腾讯内置导航
    if (location && this.data.isClickChooseLocation) {
      // let postData = {}
      this.setData({
        isClickChooseLocation: false,
        postData: {
          ...this.data.postData,
          address: location.address,
          longitude: location.longitude,
          latitude: location.latitude
        }
      })

    }
  },
  // 获取验证码
  getCode() {
    let phone = this.data.postData.phone
    if (!phone) {
      wx.showToast({
        title: '手机号码必填',
      })
      return false;
    }
    app.wxRequest({
      url: 'index/index/sendsms',
      method: 'post',
      data: {
        phone: phone
      },
      success: (res) => {
        if (res.code === 1) {
          this.countdown();
          wx.showToast({
            title: res.msg,
            icon: "none"

          })
        } else {
          wx.showToast({
            title: res.msg,
            icon: "none"
          })
        }
      }
    })
  },
  // 改变下拉选项
  bindPickerChange: function(event) {
    this.setData({ //给变量赋值
      idx: event.detail.value,
    })
  },
  changeSwitch(e) {
    this.setData({
      switchT: e.target.dataset.type
    })
  },
  bindDateChangeStart: function(e) {
    this.setData({
      start_time: e.detail.value
    })
  },
  bindDateChangeEnd: function(e) {
    this.setData({
      end_time: e.detail.value
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
            that.setData({
              'postData.licence': app.globalData.domain + data.info.url
            })
          }
        })
      }
    })
  },
  login() {
    if (this.data.postData.account == "" || this.data.postData.password == "") {
      wx.showToast({
        title: "账号和密码必填",
        icon: "none"
      })
      return
    }

    app.wxRequest({
      method: 'post',
      url: 'index/store/login',
      data: {
        account: this.data.postData.account,
        password: this.data.postData.password
      },
      success: (res) => {

        if (res.code === 1) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
          wx.navigateTo({
            url: "/pages/businessUser/businessUser"
          })
        } else {
          wx.showToast({
            title: res.msg,
            icon: "none"
          })
        }

      }
    })

  },
  checkParams() {
    let obj = {
      msg: "",
      err: 0
    }

    const params = this.data.postData;

    if (utils.isNull(params.code)) {
      obj.msg = "请填写验证码!"
      obj.err = 1
    }

    if (utils.isNull(params.phone)) {
      obj.msg = "请填写联系人手机号码!"
      obj.err = 1
      if (!utils.isPhone(params.phone)) {
        obj.msg = "请填写正确的联系人手机号码!"
      }
    }

    if (params.licence == '/assets/images/login/uploadcard.png') {
      obj.msg = "请上传营业执照!"
      obj.err = 1
    }

    if (utils.isNull(params.contact)) {
      obj.msg = "请填写联系人!"
      obj.err = 1
    }

    if (utils.isNull(this.data.start_time) || utils.isNull(this.data.end_time)) {
      obj.msg = "请选择营业时间!"
      obj.err = 1
    }

    if (utils.isNull(params.address)) {
      obj.msg = "请选择地址!"
      obj.err = 1
    }

    if (utils.isNull(this.data.idx)) {
      obj.msg = "请选择行业!"
      obj.err = 1
    }

    if (utils.isNull(params.repassword)) {
      obj.msg = "请确认密码!"
      obj.err = 1
    }

    if (utils.isNull(params.password)) {
      obj.msg = "密码必填!"
      obj.err = 1
    }

    if (utils.isNull(params.account)) {
      obj.msg = "账号必填!"
      obj.err = 1
    }
    return obj
  },

  registered() {
    const temp = this.checkParams();

    if (temp.err === 1) {
      wx.showToast({
        title: temp.msg,
        icon: 'none'
      })
      return
    }

    app.wxRequest({
      url: 'index/store/register',
      method: 'post',
      data: {
        ...this.data.postData,
        start_time: this.data.start_time,
        end_time: this.data.end_time,
        type: this.data.idx
      },
      success: (res) => {
        console.log(res);
        wx.navigateTo({
          url: "/pages/businessPackage/businessPackage"
        })
      }
    })

  },
  // 导航，获取定位,选点
  goLocation(e) {
    wx.getLocation({
      success: (res) => {
        const location = JSON.stringify({
          latitude: res.latitude,
          longitude: res.longitude
        });
        const category = '生活服务,娱乐休闲';
        this.setData({
          isClickChooseLocation: true
        })
        wx.navigateTo({
          url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category' + category
        });
      }
    })

  },
  bindinput(e) {
    this.setData({
      postData: {
        ...this.data.postData,
        [e.target.dataset.name]: e.detail.value
      }
    })
  },
  changePasswordSee() {
    this.setData({
      passwordSee: !this.data.passwordSee
    })
  },
  changePassword2See() {
    this.setData({
      password2See: !this.data.password2See
    })
  },
  changeRepasswordSee() {
    this.setData({
      repasswordSee: !this.data.repasswordSee
    })
  },
  countdown() {
    const _this = this;
    this.setData({
      canGetCode: false
    })

    let countdown = setInterval(function() {
      if (_this.data.getCodeTime > 1000) {
        _this.setData({
          getCodeTime: _this.data.getCodeTime - 1000
        })
      } else {
        clearInterval(countdown)
        _this.setData({
          canGetCode: true
        })
      }
    }, 1000)

  },
  farameDate(time){
    console.log(time)



    return time
  }
})