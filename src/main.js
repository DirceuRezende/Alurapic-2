import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import msg from './pt_BR';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
