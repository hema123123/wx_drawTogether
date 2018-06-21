// pages/account/account_index/account_index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],
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
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
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
  }
})