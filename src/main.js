import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import { store } from './store/store'

store.subscribe((mutation, state) => {
	localStorage.setItem('store', JSON.stringify(state));
});

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
