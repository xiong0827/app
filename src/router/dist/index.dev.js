"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var originPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function (location, resolve, reject) {
  if (resolve || reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, function () {}, function () {});
  }
};

var _default = new _vueRouter["default"]({
  routes: _routes["default"],
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      y: 0
    };
  }
});

exports["default"] = _default;