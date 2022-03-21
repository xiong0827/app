"use strict";

var _mockjs = _interopRequireDefault(require("mockjs"));

var _banner = _interopRequireDefault(require("./banner.json"));

var _floor = _interopRequireDefault(require("./floor.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//把json格式的引入进来
//json没有暴露 却直接引入了
//webpack默认对外暴露的：图片 json
_mockjs["default"].mock("/mock/banner", {
  code: 200,
  data: _banner["default"]
});

_mockjs["default"].mock("/mock/floor", {
  code: 200,
  data: _floor["default"]
});