// pages/account/account_index/account_index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],
    isAuthUserInfo:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    orderList: [
      {
        "imgUrl": "../../../static/images/account_img/my_order_act_icon.png",
        "text": "活动订单",
        "navigateTo": "#"
      },
      {
        "imgUrl": "../../../static/images/account_img/my_order_product_icon.png",
        "text": "商品订单",
        "navigateTo": "#"
      },
      {
        "imgUrl": "../../../static/images/account_img/my_order_gift_icon.png",
        "text": "Gift卡订单",
        "navigateTo": "#"
      },
      {
        "imgUrl": "../../../static/images/account_img/my_order_dz_icon.png",
        "text": "活动定制订单",
        "navigateTo": "#"
      }
    ],
    serviceList: [
      {
        "imgUrl": "../../../static/images/account_img/my_wallet_icon.png",
        "text": "我的钱包",
        "navigateTo": "#"
      },
      {
        "imgUrl": "../../../static/images/account_img/my_collect_icon.png",
        "text": "我的收藏",
        "navigateTo": "#"
      },
      {
        "imgUrl": "../../../static/images/account_img/my_giftcard_icon.png",
        "text": "定制Gift卡",
        "navigateTo": "#"
      },
      {
        "imgUrl": "../../../static/images/account_img/my_dingzhi_icon.png",
        "text": "定制活动",
        "navigateTo": "#"
      },
      {
        "imgUrl": "../../../static/images/account_img/my_service_icon.png",
        "text": "练习客服",
        "navigateTo": "#",
        "des": "(021-67991260)"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ isAuthUserInfo: app.globalData.isAuthUserInfo })   //用户是否授权
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log("在没有 open-type=getUserInfo 版本的兼容处理");
          app.globalData.userInfo = res.userInfo
          app.globalData.isAuthUserInfo = true
          this.setData({
            userInfo: e.detail.userInfo,
            isAuthUserInfo: true
          })
        }
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },
  
  getUserInfo: function (e) {
    console.log("点击要去授权了","用户同意授权之后获取的数据",e)
    app.globalData.userInfo = e.detail.userInfo
    app.globalData.isAuthUserInfo = true
    this.setData({
      userInfo: e.detail.userInfo,
      isAuthUserInfo:true
    })
  }
})