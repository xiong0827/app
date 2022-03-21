"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqFloorList = exports.reqCatBannerList = exports.reqCategoryList = void 0;

var _request = _interopRequireDefault(require("@/api/request"));

var _mockAjax = _interopRequireDefault(require("@/api/mockAjax"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//所有的api接口统一管理
//三级联动接口
// /api/product/getBaseCategoryList  get 无参数
var reqCategoryList = function reqCategoryList() {
  return (0, _request["default"])({
    url: "/product/getBaseCategoryList",
    method: 'get'
  });
}; //获取banner轮播图


exports.reqCategoryList = reqCategoryList;

var reqCatBannerList = function reqCatBannerList() {
  return (0, _mockAjax["default"])({
    url: '/banner',
    method: 'get'
  });
}; //floor数据


exports.reqCatBannerList = reqCatBannerList;

var reqFloorList = function reqFloorList() {
  return (0, _mockAjax["default"])({
    url: '/floor',
    method: 'get'
  });
};

exports.reqFloorList = reqFloorList;