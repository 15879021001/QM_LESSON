import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
wx.cloud.init({
    env:'taokun-599366020'
})
const app = new Vue(App)
app.$mount()
