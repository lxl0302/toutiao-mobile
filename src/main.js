import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

import 'amfe-flexible'
import '@/assets/icon/iconfont.js'
import '@/assets/icon/iconfont.css'
import '@/styles/index.scss'

import IconSvg from '@/components/icon/index.vue'
import Vant from 'vant'

import 'vant/lib/index.css'

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.component('icon-svg', IconSvg)
Vue.use(Vant)

Vue.prototype.$EventBus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
