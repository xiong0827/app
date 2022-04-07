"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUUID = void 0;

var _uuid = require("uuid");

var getUUID = function getUUID() {
  var uuid_token = localStorage.getItem('UUIDTOKEN');

  if (!uuid_token) {
    uuid_token = (0, _uuid.v4)();
    localStorage.setItem('UUIDTOKEN', uuid_token);
  }

  return uuid_token;
};

exports.getUUID = getUUID;