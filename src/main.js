import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import qs from 'qs';
import App from './App.vue';
import router from './router';

Vue.use(ElementUI)
Vue.prototype.$qs = qs;

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
