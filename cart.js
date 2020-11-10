//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    active: 0,
    steps: [
      {
        text: 'step 1',
        desc: 'Cart'
      },
      {
        text: 'step 2',
        desc: 'Payment'
      },
      {
        text: 'step 3',
        desc: 'Complete'
      }
    ]
  },
  nextStep(){
    wx.navigateTo({
      url: '/pages/payment/payment',
    })
  }
})