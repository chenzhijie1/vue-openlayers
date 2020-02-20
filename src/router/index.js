import Vue from 'vue'
import Router from 'vue-router'
import App from '@components/App'
import olmap from '@components/olmapview.vue'
import olmap2 from '@components/olmap2.vue'
import olmap3 from '@components/olmap3.vue'

Vue.use(Router)

export default new Router({
    linkActiveClass:'active',
    routes: [  
        { 
            path: '/', 
            component: App 
        },
        { 
            path: '/olmap', 
            component: olmap
        },
        { 
            path: '/olmap2', 
            component: olmap2 
        },
        { 
            path: '/olmap3', 
            component: olmap3 
        },
      ]
})
