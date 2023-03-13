/**
 * 公共类
 */

import {
    request
} from '../utils/request'

// 登录
export function wechatlogin(data) {
    return request({
        method: 'post',
        url: '/api/wx/login',
        data
    })
}
