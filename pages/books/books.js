// pages/books/books.js


const URIS = require("../../const/urls.js")
const HTTP = require("../../utils/http.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryId: 0,
    books: [],
    selected: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      categoryId: options.categoryId
    })
    const that = this;
    HTTP.GET({ categoryId: this.data.categoryId }, URIS.BooksUri).then(function(res){
      console.log(res);
      for (const x in res.data.data) {
        res.data.data[x].price = (res.data.data[x].price / 100).toFixed(2);
      }
      that.setData({
        books: res.data.data
      })
    }).catch(function(err){})
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
  checkboxChange: function(e) {
    console.log(e)
    this.setData({
      selected: e.detail.value
    })
  },
  sure: function() {
    if (this.data.selected.length === 0) {
      wx.showToast({
        title: '请选择',
        icon: "none"
      })
      return
    }
    HTTP.POST({
      status: 0,
      bookIds: this.data.selected
    }, URIS.ApplyBooks).then(function(res){
      wx.showModal({
        title: '提示',
        content: res.data.msg,
        success: function(e){
          if (e.confirm) {
            wx.navigateBack({
              
            })
          }
        }
      })
    })
  }
})