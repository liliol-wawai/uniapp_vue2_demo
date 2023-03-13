/**
 * 封装 API 请求，框架相关的 API 请求都经过此处，便于统一处理
 */

// import {
// 	BASE_URL
// } from './const.js';
import config from '@/utils/config.js'
const { baseUrl: BASE_URL, apiUrl } = config

import {
    setStorageString,
    getStorageString,
    removeStorage
} from './storage.js'
import { wechatlogin } from '@/api/common.js'

/**
 * 重新封装 uni.request，简化返回处理
 * 
 * @param {Object} params
 */
export function request(params) {
    if (typeof params === 'object' && params.hasOwnProperty('url')) {
        params.url = apiUrl + params.url;
    }

    params.header = {
        // 'Authorization': getStorageString('token'),
        'Authorization': 'Bearer ' + getStorageString('token'),
        'Content-Type': "application/json"
    };

    return new Promise((resolve, reject) => {
        // uni.showLoading({
        // 	title: '加载中...'
        // });
        uni.request(params).then(([err, res]) => {
            // console.log(err, "err", res.data)
            if (err === null) {
                if (res.data.code === 401) { // token无效
                    let apiArr = [
                        `${apiUrl}/api/wx/coupon/my`,
                        `${apiUrl}/api/wx/coupon/index`,
                        `${apiUrl}/api/wx/message/make_detail`,
                        `${apiUrl}/api/wx/message/index`
                    ]
                    // 首页请求的两个接口不跳转到登陆页面
                    if(!apiArr.includes(params.url)){
                        // console.log("???", params.url)
                        uni.navigateTo({
                            url: '/subPackages/login/index'
                        })
                    }
                } else {
                    if (res.data.code !== 200) {
                        // console.log(res.data) // 如果不是 code 200 ，显示错误原因
                        uni.showToast({
                            icon: 'none',
                            title: res.data.message
                        });
                    }
                    
                    return resolve(res.data);
                }
            } else {
                return reject(err);
            }
        }).catch(err => {
            return reject(err);
        }).finally(() => {
            // uni.hideLoading();
        })
    })
}
