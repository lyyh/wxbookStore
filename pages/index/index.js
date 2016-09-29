var items = ['item1', 'item2', 'item3', 'item4']

var pageObject = {
 data: {
    imageUrl: ['green', 'red', 'yellow'],
    downUp: "../../images/select/arrow-up.png",
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    actionSheetHidden: true,
    actionSheetItems: items
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeVertical: function (e) {
    this.setData({
      vertical: !this.data.vertical
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
   actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  arrowDown: function(e){
    console.log(123)
  }
}

for (var i = 0; i < items.length; ++i) {
  (function(itemName) {
    pageObject['bind' + itemName] = function(e) {
      console.log('click' + itemName, e)
    }
  })(items[i])
}

Page(pageObject)
