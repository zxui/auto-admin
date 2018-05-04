import Vue from 'vue';
import VueRouter from 'vue-router';

const config = {
    'Dashboard': r => require.ensure([], () => r(require('@/pages/Dashboard.vue'))),
    'QuestionBase': r => require.ensure([], () => r(require('@/pages/QuestionBase/Page.vue'))),
    'Question': r => require.ensure([], () => r(require('@/pages/Question/Page.vue'))),
    'UserInfo': r => require.ensure([], () => r(require('@/pages/UserInfo/Page.vue'))),
    'UserLogger': r => require.ensure([], () => r(require('@/pages/UserLogger/Page.vue'))),
    'Message': r => require.ensure([], () => r(require('@/pages/Message/Page.vue')))
};

if (!window.VueRouter) Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: {name: 'Dashboard'}
    }
];

Object.keys(config).forEach(key => {
    routes.push({
        name: key,
        path: '/' + key,
        component: config[key]
    })
})

const router = new VueRouter({routes});
export default router;
