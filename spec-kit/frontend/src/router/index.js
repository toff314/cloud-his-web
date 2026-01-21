import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import ProductIntroduction from '../pages/ProductIntroduction.vue';
import Solutions from '../pages/Solutions.vue';
import CustomerCases from '../pages/CustomerCases.vue';
import AboutUs from '../pages/AboutUs.vue';
import PricingPlans from '../pages/PricingPlans.vue';
import FreeTrial from '../pages/FreeTrial.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/product-introduction',
    name: 'ProductIntroduction',
    component: ProductIntroduction
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: Solutions
  },
  {
    path: '/customer-cases',
    name: 'CustomerCases',
    component: CustomerCases
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/pricing-plans',
    name: 'PricingPlans',
    component: PricingPlans
  },
  {
    path: '/free-trial',
    name: 'FreeTrial',
    component: FreeTrial
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;