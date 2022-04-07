"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = require("@/api");

var _index = _interopRequireDefault(require("@/utils/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  namespaced: true,
  actions: {
    GoodsInfo: function GoodsInfo(_ref, value) {
      var commit, result;
      return regeneratorRuntime.async(function GoodsInfo$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return regeneratorRuntime.awrap((0, _api.reqGoodsInfo)(value));

            case 3:
              result = _context.sent;

              if (result.code == 200) {
                commit('REQGOODSINFO', result.data);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    AddOrUpdateShopCart: function AddOrUpdateShopCart(context, _ref2) {
      var skuId, skuNum, result;
      return regeneratorRuntime.async(function AddOrUpdateShopCart$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              skuId = _ref2.skuId, skuNum = _ref2.skuNum;
              _context2.next = 3;
              return regeneratorRuntime.awrap((0, _api.reqAddOrUpdateShopCart)(skuId, skuNum));

            case 3:
              result = _context2.sent;

              if (!(result.code == 200)) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return", "ok");

            case 8:
              return _context2.abrupt("return", Promise.reject(new Error('falie')));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  },
  mutations: {
    REQGOODSINFO: function REQGOODSINFO(state, goodsInfo) {
      state.goodsInfo = goodsInfo;
    }
  },
  state: {
    goodsInfo: {},
    uuid: _index["default"].getUUID()
  },
  getters: {
    categoryView: function categoryView(state) {
      return state.goodsInfo.categoryView || {};
    },
    skuInfo: function skuInfo(state) {
      return state.goodsInfo.skuInfo || {};
    },
    spuSaleAttrList: function spuSaleAttrList(state) {
      return state.goodsInfo.spuSaleAttrList || [];
    }
  }
};
exports["default"] = _default;