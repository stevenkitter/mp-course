// pages/answerDetail/answerDetail.js


const URIS = require("../../const/urls.js")
const HTTP = require("../../utils/http.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer: {},
    comment_content: "",
    comments: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let answer = options.answer;
    this.setData({
      answer: JSON.parse(answer)
    })
    this.loadData();
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
  loadData(){
    const that = this;
    HTTP.GET({
      page: 0,
      answerId: this.data.answer.answerId 
    }, URIS.CommentListUri).then(function(res){
        for(let i in res.data.data){
          let com = res.data.data[i];
          let created_at = com.created_at;
          let da = new Date(created_at);
          res.data.data[i].created_at = (da.getMonth()+1) + "-" + da.getDate() + " " + da.getHours() + ":" + da.getMinutes();
        }
        that.setData({
          comments: res.data.data
        })
    })
  },
  bindInput(e) {
    this.setData({
      comment_content: e.detail.value
    })
  },
  bindconfirm(e) {
    let content = e.detail.value;
    if (content.length === 0) {
      return
    }
    const that = this;
    HTTP.POST({
      answerId: this.data.answer.answerId,
      content: content,
    }, URIS.AddCommentUri).then(function(res){
        if(res.data.code === 200) {
          wx.showToast({
            title: '评论成功',
            success: function(){
              that.loadData();
            }
          })
        }
    })
  }
})