import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '',
    routes: [{
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ 'src/pages/Home')
    }, {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ 'src/pages/About')
    }]
})
