import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import WalleLib from 'walle-library'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui'
import "./assets/styles/common.scss"
import 'element-ui/lib/theme-chalk/index.css';

console.log('WalleLib:::', WalleLib)
console.log('ElementUI:::', ElementUI)


debugger

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(WalleComponent)
Vue.use(WalleLib)
Vue.use(BaiduMap, {
  ak: '8AQMHrN3ClRhcKS4uDWtosouszsfBqE3'
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
