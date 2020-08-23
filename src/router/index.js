import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../vuex/store'
Vue.use(VueRouter)


import login from '../page/login.vue'
import home from '../page/home.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            alias: '/',
            component: login,
            name: '系统登录',
        },
        {
            path: '/home/:id',
            component: home,
            name: '系统主页',
        }
    ]
})


export default router;