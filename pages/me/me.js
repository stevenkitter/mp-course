// pages/me.js
const HTTP = require("../../utils/http.js")
const URIS = require("../../const/urls.js")
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    right_icon_url: "/images/right.png",
    answer_icon: "/images/answer_icon.png",
    apply_icon: "/images/apply_icon.png",
    teacher_icon: "/images/teacher_icon.png",
    video_icon: "/images/video_icon.png",
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
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
    const that = this
    HTTP.GET({}, URIS.UserInfoUri).then(function(res){
      if (res.statusCode === 200) {
        that.setData({
          userInfo: res.data.data
        })
      }
      
    })
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

  userDetail: function() {
    console.log("xx")
  },
  getuserinfo: function(res) {
    console.log(res);
    HTTP.POST(res.detail.userInfo, URIS.SaveUserInfoUri).then(function(res){
      console.log(res)
    }).catch(function(err){})
    this.setData({
      userInfo: res.detail.userInfo
    })
    app.globalData.userInfo = res.detail.userInfo
  }
})