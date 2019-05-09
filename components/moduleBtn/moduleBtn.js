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
    }
  }
})
