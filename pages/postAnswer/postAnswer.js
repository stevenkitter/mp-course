// pages/postAnswer/postAnswer.js

const URIS = require("../../const/urls.js")
const HTTP = require("../../utils/http.js")


Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileIds: [],
    files: [],
    title: "",
    desc: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  bindTitleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  bindDescInput: function (e) {
    this.setData({
      desc: e.detail.value
    })
  },
  addPicture: function() {
    const that = this;
    wx.chooseImage({
      count: 9 - this.data.files.length,
      success: function(res) {
        const tempFilePaths = res.tempFilePaths
        that.setData({
          files: that.data.files.concat(tempFilePaths)
        })
      },
    })
  },
  sure: function() {
    if (this.data.title.length === 0) {
      wx.showToast({
        title: '标题',
        icon: "none"
      })
      return
    }
    if (this.data.desc.length === 0) {
      wx.showToast({
        title: '内容',
        icon: "none"
      })
      return
    }
    if (this.data.files.length === 0) {
      wx.showToast({
        title: '图片',
        icon: "none"
      })
      return
    }

    var ps = []
    const that = this;
    for(let i in this.data.files) {
      var p = new Promise(function(s, r){
        console.log("ssss")
        wx.uploadFile({
          url: URIS.UploadFileUri,
          filePath: that.data.files[i],
          name: 'file',
          header: {
            token: wx.getStorageSync("token")
          },
          success: function (res) {
            console.log(res)
            if (res.statusCode === 200) {
              
              const data = JSON.parse(res.data)
              if (data.code === 200) {
                s(data.data.fileId)
              }
            }
          }
        })
      })
      ps.push(p)
    }
    Promise.all(ps).then(function(res){
      console.log(res);
    })

  },

})