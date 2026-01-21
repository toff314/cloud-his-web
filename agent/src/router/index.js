import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Solutions from '../views/Solutions.vue'
import Customers from '../views/Customers.vue'
import About from '../views/About.vue'
import FreeTrial from '../views/FreeTrial.vue'
import Packages from '../views/Packages.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页 - 智慧云门诊' }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: { title: '产品介绍 - 智慧云门诊' }
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: Solutions,
    meta: { title: '解决方案 - 智慧云门诊' }
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers,
    meta: { title: '客户案例 - 智慧云门诊' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: '关于我们 - 智慧云门诊' }
  },
  {
    path: '/free-trial',
    name: 'FreeTrial',
    component: FreeTrial,
    meta: { title: '免费试用 - 智慧云门诊' }
  },
  {
    path: '/packages',
    name: 'Packages',
    component: Packages,
    meta: { title: '版本套餐 - 智慧云门诊' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: '登录 - 智慧云门诊' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

// 路由守卫 - 设置页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
