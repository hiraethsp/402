// pages/person/person.ts
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    style: "width: 220rpx; background: linear-gradient(180deg, #2EB7F2 0%, #35BAF2 0%, #F0FBFF 131%);",
    identification: "前往认证",
    bumen: "",
    position: "",
    username: "姓名",
    password: "123456",
    id: "1"
  },
  // 认证身份函数,跳转到认证身份页面
  identify() {
    wx.navigateTo({ url: "/pages/identify/identify" })
  },

  //预约记录函数，跳转到预约记录页面
  record() {
    wx.navigateTo({ url: "/pages/record/record" })
  }
  ,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      username: app.globalData.username,
      password: app.globalData.password,
      bumen: app.globalData.bumen,
      position: app.globalData.position,
      id:app.globalData.id,
      style: app.globalData.style,
      identification: app.globalData.identification,


    })


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})