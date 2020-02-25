import Vue from 'vue'
import App from './App.vue'
import WMS from './components/OlMapWMS.vue'
import WFS from './components/OlMapWFS.vue'
import OlMap from './components/OpenStreetMap.vue'
import OlMapShow from './components/OlMapShow.vue'
import ArcgisDanymic from './components/ArcgisDanymic.vue'
import ArcgisFeatureService from './components/ArcgisFeatureService.vue'
import store from './store'
import VueRouter from 'vue-router'
import './assets/font/iconfont.css'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [  
  { path: '/OlMapWMS', component: WMS },
  { path: '/OlMapWFS', component: WFS },
  { path: '/OpenStreetMap', component: OlMap },
  { path: '/OlMapShow', component: OlMapShow },
  { path: '/ArcgisDanymic', component:ArcgisDanymic},
  { path: '/ArcgisFeatureService',component:ArcgisFeatureService}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
