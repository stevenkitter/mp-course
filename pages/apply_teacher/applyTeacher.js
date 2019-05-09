// pages/apply_teacher/applyTeacher.js

const URIS = require("../../const/urls.js")
const HTTP = require("../../utils/http.js")

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    certificate: "/images/certificate.png",
    uploaded: false,
    userRole: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    HTTP.GET({}, URIS.UserInfoUri).then(function (res) {
      if (res.statusCode === 200) {
        that.setData({
          userRole: res.data.data.userRole
        })
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

  chooseImage: function() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function(res) {
        const tempFilePath = res.tempFilePaths[0]
        that.setData({
          certificate: tempFilePath,
          uploaded: true
        })
      },
    })
  },

  sure: function() {
    if (!this.data.uploaded) {
      wx.showToast({
        title: '请上传图片',
        icon: "none"
      })
      return
    }
    const that = this
    wx.uploadFile({
      url: URIS.UploadFileUri,
      filePath: this.data.certificate,
      name: 'file',
      header: {
        token: wx.getStorageSync("token")
      },
      success: function(res) {
        console.log(res)
        if (res.statusCode === 200) {
          const data = JSON.parse(res.data)
          if (data.code === 200) {
            console.log(data.data.fileId)
            that.saveApplyRecord(data.data.fileId)
          }
        }
      }
    })
  },

  saveApplyRecord: function(fileId) {

    HTTP.POST({
      fileId: fileId,
      content: "申请成为老师"
    }, URIS.ApplyTeacherUri).then(function(res){
      console.log(res);
      wx.showModal({
        title: '提示',
        content: res.data.msg,
        showCancel: false,
        success: function() {
          wx.navigateBack({
          })
        }
      })
    }).catch(function(err){})
  }
})