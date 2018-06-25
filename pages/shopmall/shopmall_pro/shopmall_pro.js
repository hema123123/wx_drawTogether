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
    picsList: [],
    isLoaded: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading()
    wx.setNavigationBarTitle({
      "title": "玩命加载中"
    })

    this.getCurrentDetails(options.id);
    // this.getCurrentDetails(65);
    this.getHotProducts({ page_no:1,page_size:6});
    
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
  getCurrentDetails(id) {
    $http.get(api.shopmall_pro, { id: id })
      .then(res => {
        wx.hideNavigationBarLoading()
        this.setData({ pro: res.data.record, isLoaded: true });
        wx.setNavigationBarTitle({
          "title": this.data.pro.name.split("丨")[0]
        })
        WxParse.wxParse('article', 'html', res.data.record.content, this);
      }).catch(err => { console.log(err) });
  },
  getHotProducts(obj){
    $http.get(api.shopmall_index, obj)
      .then(res => {
        this.setData({ picsList: res.data.records });
      }).catch(err => {
        console.log(err);
      })
  }
  
})