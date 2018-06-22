// pages/shopmall/shopmall_index/shopmall_index.js
const app = getApp();
import util from "../../../utils/util.js"
const $http = util.http;
const Wx = util.Wx;
const api = util.api;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoaded:false,
    picsList: [],
    ListConfig: {
      page_no: 1,
      page_size: 6,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPicsList();
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
    let ListConfigPageNo = "ListConfig.page_no"
    this.setData({
      [ListConfigPageNo]: this.data.ListConfig.page_no + 1
    })
    this.getPicsList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getPicsList() {
    wx.showNavigationBarLoading()
    this.setData({ isLoaded: false})
    $http.get(api.shopmall_index, this.data.ListConfig)
    .then(res => {
      wx.hideNavigationBarLoading()
      this.setData({ isLoaded: "hidden" })
      let data = this.data.picsList.concat(res.data.records);
      this.setData({ picsList: data });
      // console.log(res);
    }).catch(err => {
      wx.hideNavigationBarLoading()
      this.setData({ isLoaded: "hidden" })
      console.log("shopmall_index page",err);
    });
  }
})