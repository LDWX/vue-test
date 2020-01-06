import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WalleComponent from 'walle-component'

Vue.config.productionTip = false

Vue.use(WalleComponent)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
