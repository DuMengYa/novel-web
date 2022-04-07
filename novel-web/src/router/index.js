import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('../views/VueLogin.vue') },
  { path: '/home', component: () => import('@/views/VueHome') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
//  获取tonken
  const tonkenStr = window.sessionStorage.getItem('token')
  if (!tonkenStr) return  next('/login')
  next()
})

export default router
