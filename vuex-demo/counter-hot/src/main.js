import Vue from 'vue'
// import App from './App.vue'
import store from './store'
import CounterControls from './CounterControls.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(CounterControls)
})
