import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '',
    routes: [{
        path: '',
        name: 'home',
        component: resolve => require.ensure([], () => resolve(require('./pages/Home.vue')), 'app/home')
    }, {
        path: '/about',
        name: 'about',
        component: resolve => require.ensure([], () => resolve(require('./pages/About.vue')), 'app/about')
    }]
})
