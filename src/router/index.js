import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import RequestBusinessTrip from '../views/RequestBusinessTrip.vue';
import RequestDetail from '../views/RequestDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/zahtjev-za-sluzbeno-putovanje',
    name: 'RequestBusinessTrip',
    component: RequestBusinessTrip
  },
  { path: '/pregled-zahtjeva/:id', 
    name: 'RequestDetail',
    component: RequestDetail 
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes
});

export default router;
