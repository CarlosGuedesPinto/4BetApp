import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import PrimeiraLiga from '../views/PrimeiraLiga.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'PrimeiraLiga',
        component: PrimeiraLiga
    }
]

const router = new VueRouter({
    routes
})

export default router
