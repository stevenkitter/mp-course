// moduleBtn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    tip: String,
    color: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: "标题",
    tip: "标"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCellTap: function (e) {
      console.log(e);
      if (e.currentTarget.dataset.title == "视频课堂") {
        wx.navigateTo({
          url: '/pages/allCourse/allCourse',
        })
      }
      if (e.currentTarget.dataset.title == "样本申请") {
        wx.navigateTo({
          url: '/pages/apply_book/applyBook',
        })
      }

      if (e.currentTarget.dataset.title == "我的样书") {
        wx.navigateTo({
          url: '/pages/mybooks/mybooks',
        })
      }
      if (e.currentTarget.dataset.title == "课件查询") {
        wx.navigateTo({
          url: '/pages/allCourseware/allCourseware',
        })
      }
      if (e.currentTarget.dataset.title == "我的样书") {
        wx.navigateTo({
          url: '/pages/mybooks/mybooks',
        })
      }
      if (e.currentTarget.dataset.title == "习题购买") {
        wx.navigateTo({
          url: '/pages/allExercises/allExercises',
        })
      }
    }
  }
})
