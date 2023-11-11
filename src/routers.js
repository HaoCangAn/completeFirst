import {createRouter,createWebHistory } from 'vue-router'

const routes=[
    {
        path: '/',
        name:'home',
        component :()=>import('./view/home.vue')
    },
    {
        path: '/test',
        name:'test',
        component :()=>import('./view/test.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router


