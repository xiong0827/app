"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("@/App.vue"));

var _TypeNav = _interopRequireDefault(require("@/components/TypeNav"));

var _Carousel = _interopRequireDefault(require("@/components/Carousel"));

var _Pagination = _interopRequireDefault(require("@/components/Pagination"));

var _store = _interopRequireDefault(require("@/store"));

require("@/mock/mockServe");

var _router = _interopRequireDefault(require("@/router"));

require("swiper/css/swiper.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//全局组件安装在componets中
_vue["default"].component(_TypeNav["default"].name, _TypeNav["default"]); //引入轮播图全局组件


_vue["default"].component(_Carousel["default"].name, _Carousel["default"]); //引入分页器全局组件


_vue["default"].component(_Pagination["default"].name, _Pagination["default"]); //引入vuex


_vue["default"].config.productionTip = false; //引入mock模拟数据

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  store: _store["default"],
  beforeCreate: function beforeCreate() {
    _vue["default"].prototype.$bus = this;
  }
}).$mount('#app');