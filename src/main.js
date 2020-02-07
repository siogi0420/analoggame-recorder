import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import VueLocalStorage from 'vue-localstorage'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(VueLocalStorage)

var firebaseConfig = {
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: process.env.VUE_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FB_DATABASE_URL,
  projectId: process.env.VUE_APP_FB_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FB_MESSAGING_SENDERID,
  appId:process.env.VUE_APP_FB_API_ID
};

console.log(firebaseConfig);

firebase.initializeApp(firebaseConfig);

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