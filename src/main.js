import Vue from 'vue'
import App from './App.vue'
import tableCheckbox from './lib/index'
Vue.use(tableCheckbox)
new Vue({
  el: '#app',
  render: h => h(App)
})
