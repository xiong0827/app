"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = require("@/api");

var _default = {
  namespaced: true,
  actions: {
    getCarList: function getCarList(_ref, value) {
      var commit, result;
      return regeneratorRuntime.async(function getCarList$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return regeneratorRuntime.awrap((0, _api.reqCartList)());

            case 3:
              result = _context.sent;

              if (result.code == 200) {
                commit("GETCARTLIST", result.data);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    deleteById: function deleteById(_ref2, skuId) {
      var commit, result;
      return regeneratorRuntime.async(function deleteById$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit;
              _context2.next = 3;
              return regeneratorRuntime.awrap((0, _api.reqDeleteById)(skuId));

            case 3:
              result = _context2.sent;

              if (!(result.code == 200)) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return", 'ok');

            case 8:
              return _context2.abrupt("return", Promise.reject(new Error('删除失败')));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    //修改选中状态
    updateCheckedById: function updateCheckedById(_ref3, _ref4) {
      var commit, skuId, isChecked, result;
      return regeneratorRuntime.async(function updateCheckedById$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref3.commit;
              skuId = _ref4.skuId, isChecked = _ref4.isChecked;
              _context3.next = 4;
              return regeneratorRuntime.awrap((0, _api.reqUpdateCheckedById)(skuId, isChecked));

            case 4:
              result = _context3.sent;

              if (!(result.code == 200)) {
                _context3.next = 9;
                break;
              }

              return _context3.abrupt("return", 'ok');

            case 9:
              return _context3.abrupt("return", Promise.reject(new Error('修改状态失败')));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      });
    },
    //修改所有产品的状态
    changeAllChecked: function changeAllChecked(_ref5, isChecked) {
      var dispatch = _ref5.dispatch,
          getters = _ref5.getters;
      var promiseAll = [];
      getters.cartList.cartInfoList.forEach(function (element) {
        var promise = dispatch('updateCheckedById', {
          skuId: element.skuId,
          isChecked: isChecked
        });
        promiseAll.push(promise);
      });
      return Promise.all(promiseAll);
    },
    //删除所有所选的
    deleteAllCheckedCart: function deleteAllCheckedCart(_ref6) {
      var dispatch = _ref6.dispatch,
          getters = _ref6.getters;
      var PromiseAll = [];
      getters.cartList.cartInfoList.forEach(function (element) {
        if (element.isChecked == 1) {
          var promise = dispatch('deleteById', element.skuId);
          PromiseAll.push(promise);
        }
      });
      return Promise.all(PromiseAll);
    }
  },
  mutations: {
    GETCARTLIST: function GETCARTLIST(state, cartList) {
      state.cartList = cartList;
    }
  },
  state: {
    cartList: []
  },
  getters: {
    cartList: function cartList(state) {
      return state.cartList[0] || {};
    }
  }
};
exports["default"] = _default;