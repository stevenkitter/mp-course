// pages/myAnswer/myAnswer.js

const HTTP = require("../../utils/http.js")
const URIS = require("../../const/urls.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 0,
    answers: [],
    count: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  loadData(tag) {
    if(!tag) {
      this.setData({page: 0, answers: []})
    }
    const that = this;
    HTTP.GET({ page: this.data.page }, URIS.MyAnswersUri).then(function(res){
      that.setData({
        count: res.data.data.count,
        answers: that.data.answers.concat(res.data.data.answers)
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
    this.loadData(false);
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
  postCourse: function () {
    wx.navigateTo({
      url: '/pages/postAnswer/postAnswer',
    })
  },

  deleteAction(e){
    const that = this;
    const index = e.currentTarget.dataset.index;
    const answer = this.data.answers[index];
    HTTP.DELETE({}, URIS.DeleteMyAnswersUri + "?answerId=" + answer.answerId).then(function (res) {
      if (res.data.code == 200) {
        wx.showToast({
          title: '删除成功',
          complete: function () {
            var ans = that.data.answers
            ans.splice(index, 1)
            that.setData({
              answers: ans,
              count: that.data.count - 1
            })
          }
        })
      }
    })
  },

  deleteAnswer(e) {
    const that = this;
    wx.showModal({
      title: '提示',
      content: '是否删除？',
      success: function(res) {
        if (res.confirm) {
          that.deleteAction(e)
        }
      }
    })
  },
  answerDetail(e) {
    const index = e.currentTarget.dataset.index;
    const an = this.data.answers[index];
    let js = JSON.stringify(an);
    wx.navigateTo({
      url: '/pages/answerDetail/answerDetail?answer='+js,
    })
  }
})