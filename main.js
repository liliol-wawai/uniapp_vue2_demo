import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

import helper from '@/helper/helper.js'
Vue.prototype.$helper = helper

// import share from '@/helper/share.js'
// Vue.mixin(share)

// 引入公共css
import '@/styles/_common.scss'
import '@/styles/_flex.scss'

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
    const app = createSSRApp(App)
    return {
        app
    }
}
// #endif