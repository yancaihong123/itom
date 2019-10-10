// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import req from '@/utils/common'
import '@/permission';
import $ from 'jquery'
import axios from 'axios'
import {
  APIS
} from './api/APIConfig'
Vue.use(req)
Vue.config.productionTip = false
axios.defaults.baseM1URL = APIS.Base_M1_URL
axios.defaults.baseM2URL = APIS.Base_M2_URL
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
