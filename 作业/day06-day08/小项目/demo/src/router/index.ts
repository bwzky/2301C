import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/zhuce',
    name: 'zhuce',
    component: () => import('../views/zhuce.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my.vue')
  },
  {
    path: '/xiang',
    name: 'xiang',
    component: () => import('../views/xiang.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
