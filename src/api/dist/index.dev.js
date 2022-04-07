"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqUserRegister = exports.reqGetCode = exports.reqUpdateCheckedById = exports.reqDeleteById = exports.reqCartList = exports.reqAddOrUpdateShopCart = exports.reqGoodsInfo = exports.reqGetSearchInfo = exports.reqFloorList = exports.reqCatBannerList = exports.reqCategoryList = void 0;

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
}; //获取搜索模块数据 地址/api/list 请求方式：post 


exports.reqFloorList = reqFloorList;

var reqGetSearchInfo = function reqGetSearchInfo(params) {
  return (0, _request["default"])({
    url: '/list',
    method: 'post',
    data: params
  });
}; //获取商品详情 地址/api/item/{ skuId }


exports.reqGetSearchInfo = reqGetSearchInfo;

var reqGoodsInfo = function reqGoodsInfo(skuId) {
  return (0, _request["default"])({
    url: "/item/".concat(skuId),
    method: 'get'
  });
}; //产品添加到购物车中(获取)
// /api/cart/addToCart/{ skuId }/{ skuNum }


exports.reqGoodsInfo = reqGoodsInfo;

var reqAddOrUpdateShopCart = function reqAddOrUpdateShopCart(skuId, skuNum) {
  return (0, _request["default"])({
    url: "/cart/addToCart/".concat(skuId, "/").concat(skuNum),
    method: 'post'
  });
}; //获取购物车


exports.reqAddOrUpdateShopCart = reqAddOrUpdateShopCart;

var reqCartList = function reqCartList() {
  return (0, _request["default"])({
    url: "/cart/cartList",
    method: "get"
  });
}; //删除购物车产品


exports.reqCartList = reqCartList;

var reqDeleteById = function reqDeleteById(skuId) {
  return (0, _request["default"])({
    url: "/cart/deleteCart/".concat(skuId),
    method: 'DELETE'
  });
}; //修改商品状态
// /cart/checkCart/{skuID}/{isChecked}


exports.reqDeleteById = reqDeleteById;

var reqUpdateCheckedById = function reqUpdateCheckedById(skuId, isChecked) {
  return (0, _request["default"])({
    url: "/cart/checkCart/".concat(skuId, "/").concat(isChecked),
    method: 'get'
  });
}; //获取验证码


exports.reqUpdateCheckedById = reqUpdateCheckedById;

var reqGetCode = function reqGetCode(phone) {
  return (0, _request["default"])({
    url: "/user/passport/sendCode/".concat(phone),
    method: 'get'
  });
}; //注册账号
///api/user/passport/register


exports.reqGetCode = reqGetCode;

var reqUserRegister = function reqUserRegister(data) {
  return (0, _request["default"])({
    url: "/user/passport/register",
    method: "post",
    data: data
  });
};

exports.reqUserRegister = reqUserRegister;