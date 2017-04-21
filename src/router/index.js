import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '../pages/List.vue';
import Operator from '../pages/Operator.vue';

if (!window.VueRouter) Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: List
  },{
    path: '/Operator',
    component: Operator
  }
];
const router = new VueRouter({routes});
export default router;
