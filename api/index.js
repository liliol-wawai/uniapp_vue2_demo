/**
 * 首页、产品列表、详情等
 */

import { request } from '../utils/request'

// 首页列表
export function homeList(data) {
    return request({
        method: 'get',
        url: '/Api/Home/index',
        data
    })
}
