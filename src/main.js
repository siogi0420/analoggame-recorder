import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import VueLocalStorage from 'vue-localstorage'

Vue.config.productionTip = false
Vue.use(VueLocalStorage)

new Vue({
  vuetify,
  render: h => h(App),
  localStorage: {
  	resultOfDate:{
  		type: Object,
  		default:[{"date":1573813251674,"result":[{"name":"siogi","score":5000}]}]
  	},
  }
}).$mount('#app')