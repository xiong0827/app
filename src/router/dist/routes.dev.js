"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Home = _interopRequireDefault(require("@/pages/Home"));

var _Search = _interopRequireDefault(require("@/pages/Search"));

var _Register = _interopRequireDefault(require("@/pages/Register"));

var _Login = _interopRequireDefault(require("@/pages/Login"));

var _Detail = _interopRequireDefault(require("@/pages/Detail"));

var _AddCartSuccess = _interopRequireDefault(require("@/pages/AddCartSuccess"));

var _ShopCart = _interopRequireDefault(require("@/pages/ShopCart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [//主页路由
{
  path: '/home',
  component: _Home["default"],
  meta: {
    footerIsShow: true
  }
}, //搜索页路由
{
  name: 'search',
  path: '/search/:keyword/',
  component: _Search["default"],
  meta: {
    footerIsShow: true
  },
  props: function props(_ref) {
    var query = _ref.query,
        params = _ref.params;
    return {
      query: query,
      params: params
    };
  }
}, //注册页路由
{
  path: '/register',
  component: _Register["default"],
  meta: {
    footerIsShow: false
  }
}, //登录页路由
{
  path: '/login',
  component: _Login["default"],
  meta: {
    footerIsShow: false
  }
}, //详情路由
{
  name: 'detail',
  path: '/detail/:skuid',
  component: _Detail["default"],
  meta: {
    footerIsShow: true
  }
}, //添加购物车成功路由
{
  name: 'addcartsuccess',
  path: '/addcartsuccess',
  component: _AddCartSuccess["default"],
  meta: {
    footerIsShow: true
  },
  props: function props(_ref2) {
    var query = _ref2.query;
    return {
      query: query
    };
  }
}, {
  name: 'shopcart',
  path: '/shopcart',
  component: _ShopCart["default"],
  meta: {
    footerIsShow: false
  }
}, //没有路径默认返回的路由
{
  path: "*",
  redirect: '/home',
  meta: {
    footerIsShow: true
  }
}];
exports["default"] = _default;