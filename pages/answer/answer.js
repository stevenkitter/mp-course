// pages/answers/answer.js


const URIS = require("../../const/urls.js")
const HTTP = require("../../utils/http.js")


Page({

  /**
   * 页面的初始数据
   */
  data: {
    answers: [],
    page: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData(false)
  },
  loadData(tag) {
    if (!tag) {
      this.setData({ page: 0, answers: [] })
    }
    const that = this;
    HTTP.GET({ page: this.data.page }, URIS.AllAnswerUri).then(function (res) {
      that.setData({
        answers: that.data.answers.concat(res.data.data)
      })
    })
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
  answerDetail(e) {
    const index = e.currentTarget.dataset.index;
    const an = this.data.answers[index];
    let js = JSON.stringify(an);
    wx.navigateTo({
      url: '/pages/answerDetail/answerDetail?answer=' + js,
    })
  }
})