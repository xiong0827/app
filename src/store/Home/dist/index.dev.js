"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = require("@/api");

var _default = {
  namespaced: true,
  actions: {
    categoryList: function categoryList(_ref, value) {
      var commit, result;
      return regeneratorRuntime.async(function categoryList$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return regeneratorRuntime.awrap((0, _api.reqCategoryList)());

            case 3:
              result = _context.sent;

              if (result.code == 200) {
                commit('CATEGORYLIST', result.data);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    bannerList: function bannerList(_ref2, value) {
      var commit, result;
      return regeneratorRuntime.async(function bannerList$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit;
              _context2.next = 3;
              return regeneratorRuntime.awrap((0, _api.reqCatBannerList)());

            case 3:
              result = _context2.sent;

              if (result.code == 200) {
                commit('BANNERLIST', result.data);
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    reqFloorList: function reqFloorList(_ref3, value) {
      var commit, result;
      return regeneratorRuntime.async(function reqFloorList$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref3.commit;
              _context3.next = 3;
              return regeneratorRuntime.awrap((0, _api.reqFloorList)());

            case 3:
              result = _context3.sent;

              if (result.code == 200) {
                commit('REQFLOORLIST', result.data);
              }

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  },
  mutations: {
    CATEGORYLIST: function CATEGORYLIST(state, categoryList) {
      state.categoryList = categoryList;
    },
    BANNERLIST: function BANNERLIST(state, bannerList) {
      state.bannerList = bannerList;
    },
    REQFLOORLIST: function REQFLOORLIST(state, floorList) {
      state.floorList = floorList;
    }
  },
  state: {
    categoryList: [],
    bannerList: [],
    floorList: []
  },
  getters: {}
};
exports["default"] = _default;