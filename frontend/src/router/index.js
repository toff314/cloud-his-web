import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/Contact.vue')
  },
  {
    path: '/product-introduction',
    name: 'ProductIntroduction',
    component: () => import('../pages/ProductIntroduction.vue')
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import('../pages/Solutions.vue')
  },
  {
    path: '/customer-cases',
    name: 'CustomerCases',
    component: () => import('../pages/CustomerCases.vue')
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: () => import('../pages/AboutUs.vue')
  },
  {
    path: '/pricing-plans',
    name: 'PricingPlans',
    component: () => import('../pages/PricingPlans.vue')
  },
  {
    path: '/free-trial',
    name: 'FreeTrial',
    component: () => import('../pages/FreeTrial.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;