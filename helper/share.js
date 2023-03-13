import config from '@/utils/config.js'
export default {
    // 定义全局分享
    // 1.发送给朋友
    onShareAppMessage(res) {
        // const param = getApp().globalData.param
        // const data = {
        //     title: param.title,
        //     path: param.path,
        //     imageUrl: param.imageUrl ? config.baseUrl + param.imageUrl : ''
        // }
        // return data
        return
    },

    // 2.分享到朋友圈
    onShareTimeline(res) {
        // const param = getApp().globalData.param
        // const data = {
        //     title: param.title,
        //     path: param.path,
        //     imageUrl: param.imageUrl ? config.baseUrl + param.imageUrl : ''
        // }
        // return data
        return
    },
}
