// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'
import moment from "moment";

// Vue.use(BootstrapVue)

import Directives from './plugins/directives';
import io from 'socket.io-client';
const socket = io('http://localhost:8080'); // socket server

Vue.use(VModal, {dynamic: true})
Vue.config.productionTip = false
Vue.prototype.$socket =socket;

Vue.use(Directives)
Vue.prototype.moment = moment;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
