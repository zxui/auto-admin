import axios from 'axios';

axios.defaults.timeout = 40000;
axios.defaults.withFailTips = false;
axios.defaults.withErrorTips = false;

/**
 * axios config.fail:（可选项）result.code!=0时调用的方法
 *       config.withFailTips:(可选项，默认false) result.code!=0时显示提示信息
 *       config.withErrorTips:(可选项，默认false)status!=200时显示错误提示信息
 */
axios.interceptors.request.use(function (config) {
    // get请求关闭缓存
    if (config.method.toUpperCase() == "GET") {
        config.params ? config.params._ = Date.now() : config.params = {_: Date.now()}
    }
    return config;
}, function (error) {
    return Promise.reject(error);
})
axios.interceptors.response.use(function (response) {
    if (response && response.status != "200") {
        return Promise.reject({response});
    }
    var data = response.data;
    if (data.code != 0) {
        // 需重新登录
        if (data.code == "403") {

        }

        if (data.code == "402") {
            console.log("请求超时")
        }

        return Promise.reject({response});
    }

    return response;
}, function (error) {
    var response = error.response;
    var status = response && response.status;
    var statusText = response && response.statusText;
    if (statusText == "timeout") {
        // Message.error({ message:"网络连接超时！"});
    } else if (status == 550) {
        // Message.error({ message:"550 Error Message"});
    } else if (status == 403) {
        // Message.error({ message:"您没有权限访问该资源！"});
    } else if (status == 404) {
        // Message.error({ message:"您访问的地址或页面不存在！"});
    } else if (status == 500) {
        // Message.error({ message:"维护人员正在抢修中，稍后再试..."});
    }
    return Promise.reject(error);
})

export default axios
