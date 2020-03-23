import Vue from 'vue'
import Router from 'vue-router'

import Home from './../views/Home'
import Relatorio from './../views/Relatorio/Relatorio'

Vue.use(Router);

const routes = [
    {
        name: 'home', 
        path: '/',
        component: Home
    },

    {
        name: 'relatório',
        path: '/relatorio',
        component: Relatorio
    }
]

const router = new Router({ routes })

export default router