import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: '/other',
    routes: [{
        path: '',
        name: 'sgin-panel',
        component: resolve => require.ensure([], () => resolve(require('./pages/SginPanel.vue')), 'other/sgin.panel')
    }, {
        path: '/question-panel',
        name: 'question-panel',
        component: resolve => require.ensure([], () => resolve(require('./pages/QuestionPanel.vue')), 'other/question.panel')
    }, {
        path: '/student-info',
        name: 'student-info',
        component: resolve => require.ensure([], () => resolve(require('./pages/StudentInfo.vue')), 'other/student.info')
    }]
})
