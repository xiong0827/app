"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqCategoryList = void 0;

var _request = _interopRequireDefault(require("@/api/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//所有的api接口统一管理
//三级联动接口
// /api/product/getBaseCategoryList  get 无参数
var reqCategoryList = function reqCategoryList() {
  (0, _request["default"])({
    url: "/api/product/getBaseCategoryList",
    method: 'get'
  });
};

exports.reqCategoryList = reqCategoryList;