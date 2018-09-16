import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import { currency } from './currency'

Vue.config.productionTip = false

Vue.filter('currency', currency)

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')