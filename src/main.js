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
  		default:[
  			{"date":"2019/10/16","result":[{"name":"たぬき","score":2075}, {"name":"えりさ", "score":-4250}, {"name":"子荻", "score":20175}, {"name":"たかはし", "score":150}, {"name":"ゆろ", "score":7350}]},
  			{"date":"2019/10/27","result":[{"name":"たぬき","score":4200}, {"name":"えりさ", "score":9200}, {"name":"子荻", "score":9375}]},
  			{"date":"2019/10/31","result":[{"name":"たぬき","score":-50}, {"name":"えりさ", "score":6625}, {"name":"子荻", "score":7700}, {"name":"たかはし", "score":14125}, {"name":"ゆろ", "score":1600}, {"name":"くちか", "score":0}]},
  			{"date":"2019/11/14","result":[{"name":"たぬき","score":9600}, {"name":"えりさ", "score":9250}, {"name":"子荻", "score":12400}, {"name":"たかはし", "score":0}, {"name":"ゆろ", "score":-3950}, {"name":"くちか", "score":8850}, {"name":"そひ", "score":300}, {"name":"まつの", "score":-1450}]},
  			{"date":"2019/11/26","result":[{"name":"たぬき","score":1675}, {"name":"えりさ", "score":-6650}, {"name":"子荻", "score":11500}, {"name":"たかはし", "score":18325}, {"name":"ゆろ", "score":800}, {"name":"くちか", "score":16175}, {"name":"そひ", "score":-2375}, {"name":"まつの", "score":550}]}
  			]
  	},
  }
}).$mount('#app')