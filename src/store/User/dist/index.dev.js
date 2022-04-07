"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = require("@/api");

var _default = {
  namespaced: true,
  actions: {
    getCode: function getCode(_ref, phone) {
      var commit, result;
      return regeneratorRuntime.async(function getCode$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return regeneratorRuntime.awrap((0, _api.reqGetCode)(phone));

            case 3:
              result = _context.sent;

              if (result.code == 200) {
                commit('GETCODE', result.data);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    //注册账户
    userRegister: function userRegister(_ref2, data) {
      var commit, result;
      return regeneratorRuntime.async(function userRegister$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit;
              _context2.next = 3;
              return regeneratorRuntime.awrap((0, _api.reqUserRegister)(data));

            case 3:
              result = _context2.sent;

              if (!(result.code == 200)) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return", 'ok');

            case 8:
              return _context2.abrupt("return", Promise.reject(new Error('flie')));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  },
  mutations: {
    GETCODE: function GETCODE(state, code) {
      state.code = code;
    }
  },
  state: {
    code: ''
  },
  getters: {}
};
exports["default"] = _default;