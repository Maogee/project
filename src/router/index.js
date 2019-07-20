import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Introduce from '../components/Introduce'
import Blog from '../components/Blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
]
})
