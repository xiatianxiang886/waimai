import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('@/views/Home'),
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: () => import('@/views/Order'),
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: () => import('@/views/Profile'),
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: () => import('@/views/Search'),
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            component: () => import('@/views/Login'),
            meta: {
                showFooter: false
            }
        }
    ]
})
