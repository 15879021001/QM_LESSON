import Vue from 'vue'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import routerConfig from './router-config'
import ElementUI from 'element-ui';


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  routes: routerConfig
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
