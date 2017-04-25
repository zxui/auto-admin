import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '../pages/List.vue';
import Table from '../pages/Table.vue';
import Tag from '../pages/Tag.vue';
import Progress from '../pages/Progress.vue';
import Tree from '../pages/Tree.vue';
import Pagination from '../pages/Pagination.vue';
import Badge from '../pages/Badge.vue';

if (!window.VueRouter) Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: List
  },{
    path: '/Table',
    component: Table
  },{
    path: '/Tag',
    component: Tag
  },{
    path: '/Progress',
    component: Progress
  },{
    path: '/Tree',
    component: Tree
  },{
    path: '/Pagination',
    component: Pagination
  },{
    path: '/Badge',
    component: Badge
  }
];
const router = new VueRouter({routes});
export default router;
