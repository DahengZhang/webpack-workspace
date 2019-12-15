import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: '/main',
    routes: [{
        path: '',
        name: 'score-panel',
        component: resolve => require.ensure([], () => resolve(require('./pages/ScorePanel.vue')), 'main/score.panel')
    }, {
        path: '/all-info',
        name: 'all-info',
        component: resolve => require.ensure([], () => resolve(require('./pages/AllInfo.vue')), 'main/all.info')
    }]
})
