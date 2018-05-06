import Vue from 'vue'
import App from './App.vue'

import './assets/scss/main.scss'

import { store } from './store/store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
