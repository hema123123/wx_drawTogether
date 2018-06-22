// pages/shopmall/shopmall_pro/shopmall_pro.js
import util from "../../../utils/util.js"
const WxParse = require("../../../static/plugin/wxParse/wxParse.js");

const $http = util.http;
const Wx = util.Wx;
const api = util.api;



Page({

  /**
   * 页面的初始数据
   */
  data: {
    pro: {},
    isLoaded:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading()
    wx.setNavigationBarTitle({
      "title": "玩命加载中"
    })
   $http.get(api.shopmall_pro, { id: options.id })
  //  $http.get(api.shopmall_pro, { id: 65 })
      .then(res => {
        wx.hideNavigationBarLoading()
        this.setData({ pro: res.data.record, isLoaded: true });
        wx.setNavigationBarTitle({
          "title": this.data.pro.name.split("丨")[0]
        })
        WxParse.wxParse('article', 'html', res.data.record.content, this);
      }).catch(err => { console.log(err) });

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