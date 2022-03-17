"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _TypeNav = _interopRequireDefault(require("@/pages/Home/TypeNav"));

var _api = require("@/api");

var _router = _interopRequireDefault(require("@/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;

_vue["default"].component(_TypeNav["default"].name, _TypeNav["default"]); //引入路由


(0, _api.reqCategoryList)();
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"]
}).$mount('#app');