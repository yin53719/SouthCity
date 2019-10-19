const accountInfo = wx.getAccountInfoSync();
const GlobaleConfig = {
    domain:'https://juaa.shu0.cn/',
    appId:accountInfo.miniProgram.appId
}


module.exports = GlobaleConfig 