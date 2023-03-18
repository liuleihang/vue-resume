import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import element from './components/element/index'
Vue.use(element)

import './assets/iconfont/iconfont.css'
import './assets/styles/style.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
