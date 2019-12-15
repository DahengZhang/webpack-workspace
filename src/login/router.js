import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: '/',
    routes: [{
        path: '',
        name: 'sgin-in',
        component: resolve => require.ensure([], () => resolve(require('./pages/SginIn.vue')), 'login/sign.in')
    }, {
        path: '/classrooms',
        name: 'classrooms',
        component: resolve => require.ensure([], () => resolve(require('./pages/Classrooms.vue')), 'login/classrooms')
    }]
})
