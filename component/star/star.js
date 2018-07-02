// component/star/star.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    key:{
      type:Number,
      value:0
    },
    isbindTap:{
      type: Boolean,
      value: false
    },
    sizeNum:{
      type:Number,
      value:28
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    stars: [0, 1, 2, 3, 4],
    normalSrc: './images/list_Star_icon_3.png',
    selectedSrc: './images/list_Star_icon_1.png',
    halfSrc: './images/list_Star_icon_2.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击右边,半颗星
    _selectLeft: function (e) {
      var key = e.currentTarget.dataset.key
      if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
        //只有一颗星的时候,再次点击,变为0颗
        key = 0;
      }
      console.log("得" + key + "分")
      this.setData({
        key: key
      })

    },
    //点击左边,整颗星
    _selectRight: function (e) {
      var key = e.currentTarget.dataset.key
      console.log("得" + key + "分")
      this.setData({
        key: key
      })
    }
  }
})
