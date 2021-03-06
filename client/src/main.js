import Vue from 'vue'
import App from './App.vue'
import VueGoogleCharts from 'vue-google-charts'

export const eventBus = new Vue();

Vue.use(VueGoogleCharts);

new Vue({
  render: h => h(App),
}).$mount('#app')
