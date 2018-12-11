import Vue from 'vue'
import App from './App.vue'
import { store } from './store'

store.subscribe((mutation, state) => {
  localStorage.setItem('serieCounterData', JSON.stringify(state))
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
