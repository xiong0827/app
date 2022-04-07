"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _Home = _interopRequireDefault(require("@/store/Home"));

var _Search = _interopRequireDefault(require("@/store/Search"));

var _Detail = _interopRequireDefault(require("@/store/Detail"));

var _ShopCart = _interopRequireDefault(require("@/store/ShopCart"));

var _User = _interopRequireDefault(require("@/store/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  modules: {
    home: _Home["default"],
    search: _Search["default"],
    detail: _Detail["default"],
    shopCart: _ShopCart["default"],
    user: _User["default"]
  }
});

exports["default"] = _default;