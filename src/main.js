import Vue from 'vue'
import App from './App.vue'
import WMS from './components/olmap.vue'
import WFS from './components/olmap2.vue'
import TEST from './components/olmap3.vue'
import TEST1 from './components/olmap4.vue'
import VueRouter from 'vue-router'
import './assets/font/iconfont.css'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [  
  { path: '/olmap', component: WMS },
  { path: '/olmap2', component: WFS },
  { path: '/olmap3', component: TEST },
  { path: '/olmap3', component: TEST1 }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
