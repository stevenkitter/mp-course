//index.js
//获取应用实例

const URIS = require("../../const/urls.js")
const HTTP = require("../../utils/http.js")

const app = getApp()

Page({
  data: {
    famous: [],
    myCourses: [],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.loadData(false);
    this.loadFamous();
  },
  loadFamous() {
    const that = this;
    HTTP.GET({}, URIS.FamousCourseUri).then(function(res){
      that.setData({
        famous: res.data.data
      })
    })
  },
  loadData: function (more) {
    if (!more) {
      this.setData({
        page: 0
      })
    }
    const that = this
    HTTP.GET({ page: this.data.page }, URIS.AllCourseUri).then(function (res) {
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

  itemClicked: function (e) {
    console.log(e);
    const index = e.currentTarget.dataset.index;
    const course = this.data.myCourses[index];
    const js = JSON.stringify(course)
    wx.navigateTo({
      url: '/pages/courseDetail/courseDetail?course=' + js,
    })
  },
  famousItemClicked: function (e) {
    console.log(e);
    const index = e.currentTarget.dataset.index;
    const course = this.data.famous[index];
    const js = JSON.stringify(course)
    wx.navigateTo({
      url: '/pages/courseDetail/courseDetail?course=' + js,
    })
  }
})
