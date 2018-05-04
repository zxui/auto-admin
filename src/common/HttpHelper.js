import axios from 'axios';
axios.defaults.timeout = 40000;
import { Loading ,Message} from 'element-ui';
axios.interceptors.request.use(function (config) {
    // get请求关闭缓存
    if (config.method.toUpperCase() == "GET") {
        config.params ? config.params._ = Date.now() : config.params = {_: Date.now()}
    }
    Loading.service({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 0)'
    });
    return config;
}, function (error) {
    Message.error('维护人员正在抢修中，稍后再试...');
    Loading.service().close();
    return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {
    Loading.service().close();
    if (response && response.status != "200") {
        return Promise.reject({response});
    }
    var data = response.data;
    if (data.code != 0) {
        // 需重新登录
        if (data.code == "403") {
            console.error("无权限");
        }
        if (data.code == "402") {
            console.error("请求超时")
        }
        Message.error(data.code + '：' + data.msg);
        return Promise.reject({response});
    }
    return response;
}, function (error) {
    var response = error.response;
    var status = response && response.status;
    var statusText = response && response.statusText;
    if (statusText == "timeout") {
        console.error("网络连接超时")
    } else if (status == 550) {
        console.error("550 Error Message")
    } else if (status == 403) {
        console.error("您没有权限访问该资源")
    } else if (status == 404) {
        console.error("您访问的地址或页面不存在")
    } else if (status == 500) {
        console.error("维护人员正在抢修中，稍后再试...")
    }
    Message.error('维护人员正在抢修中，稍后再试...');
    Loading.service().close();
    return Promise.reject(error);
})

export default axios
