import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import toast from 'components/common/toast'
 
// FastClick.attack(document.body)

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

Vue.use(toast)
Vue.use(VueLazyload,{
  loading:require('./assets/img/common/bg.png'),
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
