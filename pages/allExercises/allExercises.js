// pages/allCourse/allCourse.js

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
    this.loadData(false)
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
  loadData: function (more) {
    if (!more) {
      this.setData({
        page: 0
      })
    }
    const that = this
    HTTP.GET({ page: this.data.page }, URIS.AllExerciseUri).then(function (res) {
      if (res.statusCode === 200) {
        console.log(res);
        if (more) {
          this.setData({
            page: this.data.page + 1
          })
        } else {
          for (const x in res.data.data) {
            res.data.data[x].price = (res.data.data[x].price / 100).toFixed(2);
          }
          that.setData({
            myCourses: res.data.data
          })
        }

      }
    })
  },
  itemClicked: function (e) {
    console.log(e);
    const index = e.currentTarget.dataset.index;
    const course = this.data.myCourses[index];
    const js = JSON.stringify(course)
    wx.navigateTo({
      url: '/pages/courseDetail/courseDetail?course=' + js,
    })
  },
  buy(e) {
    const that = this;
    wx.showModal({
      title: '提示',
      content: '确定购买？',
      success(res) {
        if(res.confirm) {
          const index = e.currentTarget.dataset.index;
          const course = that.data.myCourses[index];
          HTTP.POST({ exerciseId: course.exerciseId}, URIS.BuyExerciseUri).then(function(res){
            console.log(res);
            if(res.data.code === 200) {
              wx.showToast({
                title: res.data.msg,
              })
            } else {
              wx.showToast({
                title: res.data.msg,
                icon: "none"
              })
            }
          })
        }
      }
    })
    

  }
})