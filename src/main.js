import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HeaderTop from '@/components/HeaderTop'
Vue.component(HeaderTop.name, HeaderTop)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
