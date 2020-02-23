import Vue from 'vue'
import App from './App.vue'
import WMS from './components/OlMapWMS.vue'
import WFS from './components/OlMapWFS.vue'
import OlMap from './components/OpenStreetMap.vue'
import store from './store'
import VueRouter from 'vue-router'
import './assets/font/iconfont.css'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [  
  { path: '/OlMapWMS', component: WMS },
  { path: '/OlMapWFS', component: WFS },
  { path: '/OpenStreetMap', component: OlMap }
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
