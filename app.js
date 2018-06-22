//app.js
import util from "./utils/util.js"
const $http = util.http;
const Wx = util.Wx;

App({
  onLaunch: function () {

    //配置baseUrl和拦截器(请求成功后拦截器，业务层处理服务器数据)，baseUrl例如 /api
    $http.baseUrl(this.globalData.serviceHost)
      .interceptor(res => {
        switch (res.statusCode) {
          case 401:
            wx.showToast({
              icon: 'loading',
              title: '重新登录',
            })
            console.log("重新登录需要去登录页面");
            // this.login()
            return false;
          case 200:
            return true;
          default:
            wx.showToast({
              title: '操作失败',
            })
            console.log(res);
            return false;
        }
      })












    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log("用户登录成功", res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          console.log("发送 res.code 到后台换取 openId, sessionKey, unionId");
        }
      }
    })


    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          this.globalData.isAuthUserInfo = true;
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            }
          })
        } else {
          this.globalData.isAuthUserInfo = false;
        }
      }
    })
  },
  globalData: {
    userInfo: [],//用户信息
    isAuthUserInfo: false,                   //用户是否授权
    serviceHost: "http://api.17hua.me"  //host
  }
})