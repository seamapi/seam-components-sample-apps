import "@seamapi/react/elements.js"
import Vue from 'vue'
import App from './App.vue'

import './assets/main.css'

Vue.config.ignoredElements = [/^seam-/]
Vue.prototype.console = console

new Vue({
  render: (h) => h(App)
}).$mount('#app')