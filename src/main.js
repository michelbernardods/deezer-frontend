import Vue from 'vue'
import App from './App.vue'
import 'moment'
import vuetify from './plugins/vuetify';
import router from './router/index'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  axios,
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
