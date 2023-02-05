import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('./pages/homePage.vue'),
  },
  {
    path: '/detail/:eventId',
    name: 'detail',
    component: () => import('./pages/detailPage.vue'),
  },
  {
    path: '/seat-plans/:eventId',
    name: 'seats',
    component: () => import('./pages/seatsPage.vue'),
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('./pages/paymentPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
