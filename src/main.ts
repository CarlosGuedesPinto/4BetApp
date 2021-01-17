import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/sass-css-utilities/style.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'

axios.defaults.baseURL = process.env.VUE_APP_API_URL
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
