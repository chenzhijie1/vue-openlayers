import Vue from 'vue'
import App from './App.vue'
import WMS from './components/olmap.vue'
import WFS from './components/olmap2.vue'
import TEST from './components/olmap3.vue'
import VueRouter from 'vue-router'
import './assets/font/iconfont.css'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [  
  { path: '/olmap', component: WMS },
  { path: '/olmap2', component: WFS },
  { path: '/olmap3', component: TEST }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
