import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Introduce from '../components/Introduce'
import Blog from '../components/Blog'
import Read from '../components/Read'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'/',
            redirect:'/home',
        },
        {
            path: '/home',
            name: "Home",
            component: Home
        },
        {
            path: '/introduce',
            name: "Introduce",
            component: Introduce
        },
        {
            path: '/blog',
            name: "Blog",
            component: Blog
        },
        {
            path:'/read/:title',
            name:"Read",
            component:Read
        },
    ]
})
