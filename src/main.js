import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import MuseUi from 'muse-ui'

import 'swiper/css/swiper.css'
import 'muse-ui/dist/muse-ui.css'
import './common/icons.css'
import './common/style.css'

Vue.use(VueAwesomeSwiper)
Vue.use(MuseUi)

Vue.config.productionTip = false

/* new Vue({
  render: h => h(App),
}).$mount('#app') */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App)
})