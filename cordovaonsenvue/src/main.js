// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import CustomToolbar from "./partials/CustomToolbar.vue";
import store from './store'
import App from './App'
//import AppNavigator from './AppNavigator'

Vue.config.productionTip = false

Vue.use(VueOnsen)
Vue.component("custom-toolbar", CustomToolbar);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
