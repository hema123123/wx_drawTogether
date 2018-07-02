// pages/list/list_index/list_index.js
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
    lists: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $http.get("/yqhbsp/event/search?&city_code=3101&p=&d=&stext=&start=2018-07-02&end=2018-12-29&num=1&page_no=1&page_size=5&sort=closing_time%7C0")
      .then(res => {
        let data = res.data.records;
        data.map(item => {
          item.event_date = this.getTime(item.event_time, 0);
          item.event_dtime = this.getTime(item.event_time, 1);
        })
        this.setData({ lists: data })
      })

    // this.getTime("2018-07-06 19:00:00", 0); this.getTime("2018-07-06 19:00:00", 1)
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

  getTime(time, index) {
    time = time.replace(/\-/g, '/')
    let t = new Date(time)
    const weekName = ['日', '一', '二', '三', '四', '五', '六'];
    return index == 0 ? (1 + t.getMonth()) + '月' + t.getDate() + '日' : '周' + weekName[t.getDay()] + ' ' + (t.getHours() < 10 ? '0' + t.getHours() : t.getHours()) + ':' + (t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes())
  }

})