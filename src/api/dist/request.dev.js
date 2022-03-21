"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _nprogress = _interopRequireDefault(require("nprogress"));

require("nprogress/nprogress.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//对axios进行封装
// 1利用axios对象的方法create 去创建一个axios实列
//2.request就是axios 稍微配置一下
var requests = _axios["default"].create({
  //在给发请求的自动带上api
  baseURL: '/api',
  //代表超时事件
  timeout: 5000
}); //请求拦截器


requests.interceptors.request.use(function (config) {
  //config是一个配置对象对象里面有一个属性很重要，header请求头
  _nprogress["default"].start();

  return config;
}); //响应拦截器

requests.interceptors.response.use(function (res) {
  _nprogress["default"].done();

  return res.data;
}, function (err) {
  return Promise.reject(new Error('faile'));
});
var _default = requests;
exports["default"] = _default;