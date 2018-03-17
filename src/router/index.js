import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';

/*Basic*/
import TopicType from '../pages/topic/TopicType.vue';
import TopicRes from '../pages/topic/TopicRes.vue';

if (!window.VueRouter) Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Dashboard
    }, {
        path: '/TopicType',
        component: TopicType
    }, {
        path: '/TopicRes',
        component: TopicRes
    }
];
const router = new VueRouter({routes});
export default router;
