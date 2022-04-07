"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqCategoryList = void 0;

// /api/product/getBaseCategoryList  get 无参数
var reqCategoryList = function reqCategoryList() {
  return requests({
    url: "/product/getBaseCategoryList",
    method: 'get'
  });
};

exports.reqCategoryList = reqCategoryList;