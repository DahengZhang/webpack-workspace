import Vue from 'vue'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import store from './store'
import ajax from './ajax'

Vue.use(VueAxios, ajax)

Vue.prototype.$eventBus = new Vue()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#root')
