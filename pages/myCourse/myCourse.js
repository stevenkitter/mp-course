// pages/myCourse/myCourse.js

const URIS = require("../../const/urls.js")
const HTTP = require("../../utils/http.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myCourses: [],
    page: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  loadData: function(more) {
    if (!more) {
      this.setData({
        page: 0
      })
    }
    const that = this
    HTTP.GET({ page: this.data.page }, URIS.MyCourseUri).then(function (res) {
      if (res.statusCode === 200) {
        console.log(res);
        if (more) {
          this.setData({
            page: this.data.page + 1
          })
        } else {
          that.setData({
            myCourses: res.data.data
          })
        }
        
      }
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
    this.loadData(false)
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
  postCourse: function() {
    console.log("xx")
    wx.navigateTo({
      url: '/pages/postCourse/postCourse',
    })
  },
  deleteCourse: function(e) {
    const that = this;
    wx.showModal({
      title: '提示',
      content: '确定删除',
      success: function(res) {
        if (res.confirm) {
          const courseId = e.currentTarget.dataset.courseid;
          HTTP.DELETE({}, URIS.DeleteCourseUri + "?courseId=" + courseId).then(function (res) {
            that.loadData(false);
          }).catch(function () { })
        }
      }
    })

    
  }
})