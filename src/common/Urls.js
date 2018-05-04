const API = {};
/**
 * dev为本地测试
 * test为联调测试
 * pro为正在版本
 * @type {string}
 */
API.env = 'test';

API.isDev = ('dev' == API.env);
API.isTest = ('test' == API.env);
API.isPro = ('pro' == API.env);

if (API.isDev) {
    API.basePath = './';
} else {
    API.basePath = '/api/v1/';

    API.questionBaseUrl = API.basePath + 'questionBase';
    API.questionUrl = API.basePath + 'question';
}

export default API;