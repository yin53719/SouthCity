const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const dateReplace = (str, t) => {
  return str.replace(/\-/g, t)
}

const isNull = (test) => {
  if (test == null || test == undefined || test == '' || test.match(/^\s*$/)) {
    return true;
  } else {
    return false;
  }
}

const isPhone = (test) => {
  const regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if (!regIdNo.test(test)) {
    return false;
  } else {
    return true;
  }
}


const getLocation = (_this) => {
  wx.getLocation({
    success: (res) => {
      wx.chooseLocation({
        latitude: res.latitude,
        longitude: res.longitude,
        success: (res) => {
          _this.locationCallBack(res)
        }
      })

    }
  })
}


module.exports = {
  formatTime: formatTime,
  dateReplace: dateReplace,
  getLocation,
  isNull,
  isPhone
}