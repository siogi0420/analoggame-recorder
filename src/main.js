import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import VueLocalStorage from 'vue-localstorage'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueLocalStorage)

new Vue({
  vuetify,
  render: h => h(App),
  router,
  serverCacheKey:false,
  localStorage: {
  	resultOfDate:{
  		type: Object,
  	},
    TournamentList:{
      type:Array,
    }
  }
}).$mount('#app')