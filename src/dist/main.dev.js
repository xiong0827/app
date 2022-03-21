"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("@/App.vue"));

var _TypeNav = _interopRequireDefault(require("@/components/TypeNav"));

var _Carousel = _interopRequireDefault(require("@/components/Carousel"));

var _store = _interopRequireDefault(require("@/store"));

require("@/mock/mockServe");

var _router = _interopRequireDefault(require("@/router"));

require("swiper/css/swiper.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//全局组件安装在componets中
//引入轮播图全局组件
_vue["default"].config.productionTip = false;

_vue["default"].component(_TypeNav["default"].name, _TypeNav["default"]);

_vue["default"].component(_Carousel["default"].name, _Carousel["default"]); //引入mock模拟数据


var vm = new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  store: _store["default"]
}).$mount('#app');
console.log(vm);