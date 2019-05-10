// pages/mybooks/mybooks.js


const URIS = require("../../const/urls.js")
const HTTP = require("../../utils/http.js")


Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 0,
    books: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.loadData(false);
  },

  loadStatus(status) {
    switch (status) {
      case 0:
        return "申请中";
      case 1:
        return "拒绝";
      case 2:
        return "通过，等待发货";
      case 3:
        return "已发货，等待签收";
      case 4:
        return "签收成功";
    }
  },

  loadData(tag) {
    const that = this;
    HTTP.GET({
      page: this.data.page
    }, URIS.ApplyBookListUri).then(function(res) {
      console.log(res);
      for (const x in res.data.data) {
        res.data.data[x].books.price = (res.data.data[x].books.price / 100).toFixed(2);
        res.data.data[x].status = that.loadStatus(res.data.data[x].status)
      }
      that.setData({
        books: res.data.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  receive: function(res) {
    const that = this;
    wx.showModal({
      title: '提示',
      content: '确定签收？',
      success: function(e) {
        if (e.confirm) {
          HTTP.POST({}, URIS.ReceiveBookUri + "?id=" + res.currentTarget.dataset.index).then(function(res) {
            if (res.data.code === 200) {
              wx.showToast({
                title: '签收成功',
                duration: 1500,
                complete: function(){
                  that.loadData(false);
                }
              })
            }
          })
        }
      }
    })
  }
})