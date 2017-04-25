import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '../pages/List.vue';
import Table from '../pages/Table.vue';

if (!window.VueRouter) Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: List
  },{
    path: '/Table',
    component: Table
  }
];
const router = new VueRouter({routes});
export default router;
