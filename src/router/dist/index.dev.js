"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("@/pages/Home"));

var _Search = _interopRequireDefault(require("@/pages/Search"));

var _Register = _interopRequireDefault(require("@/pages/Register"));

var _Login = _interopRequireDefault(require("@/pages/Login"));

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
  routes: [{
    path: '/home',
    component: _Home["default"],
    meta: {
      footerIsShow: true
    }
  }, {
    name: 'search',
    path: '/search/:key?',
    component: _Search["default"],
    meta: {
      footerIsShow: true
    },
    props: function props(_ref) {
      var query = _ref.query,
          params = _ref.params;
      return {
        keywords: query.keywords
      };
    }
  }, {
    path: '/register',
    component: _Register["default"],
    meta: {
      footerIsShow: false
    }
  }, {
    path: '/login',
    component: _Login["default"],
    meta: {
      footerIsShow: false
    }
  }, {
    path: "*",
    redirect: '/home',
    meta: {
      footerIsShow: true
    }
  }]
});

exports["default"] = _default;