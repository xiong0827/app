"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("@/api/index");

var _default = {
  namespaced: true,
  actions: {
    getSearchInfo: function getSearchInfo(_ref, value) {
      var commit, result;
      return regeneratorRuntime.async(function getSearchInfo$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return regeneratorRuntime.awrap((0, _index.reqGetSearchInfo)(value));

            case 3:
              result = _context.sent;

              if (result.code == 200) {
                commit('GETSEARCHINFO', result.data);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  },
  mutations: {
    GETSEARCHINFO: function GETSEARCHINFO(state, SearchInfo) {
      state.SearchInfo = SearchInfo;
    }
  },
  state: {
    SearchInfo: []
  },
  getters: {
    goodsList: function goodsList(state) {
      return state.SearchInfo.goodsList || [];
    },
    attrsList: function attrsList(state) {
      return state.SearchInfo.attrsList || [];
    },
    trademarkList: function trademarkList(state) {
      return state.SearchInfo.trademarkList || [];
    },
    total: function total(state) {
      return state.SearchInfo.total;
    }
  }
};
exports["default"] = _default;