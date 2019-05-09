// components/meCell/meCell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon: String,
    title: String,
    right_icon_url: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    right_icon_url: "/images/right.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCellTap: function(e) {
      if (e.currentTarget.dataset.title == "申请成为老师") {
        wx.navigateTo({
          url: '/pages/apply_teacher/applyTeacher',
        })
      }
      if (e.currentTarget.dataset.title == "发布视频") {
        wx.navigateTo({
          url: '/pages/myCourse/myCourse',
        })
      }
    }
  }
})
