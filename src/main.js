import Vue from 'vue'
import App from './App.vue'

Vue.prototype.windowRoute = {
  host: window.location.origin,

  history: window.history,
  location: window.location,

  get path() {
    return this.location.pathname
  },

  set path(value) {
    this.history.replaceState(null, '',
      this.host + value
    );
  }
}

new Vue({
  el: '#app',
  render: h => h(App)
})
