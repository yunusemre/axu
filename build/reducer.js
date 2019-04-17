"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducerForgotPassword = exports.reducerLogin = undefined;

var _constant = require("./constant");

var initialState = {
  login: false
};

var reducerLogin = function reducerLogin() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constant.LOGIN:
      return Object.assign({}, state, { login: true, message: "" });
    case _constant.LOGIN_FAIL:
      return Object.assign({}, state, { login: false, message: action.payload });
    default:
      return state;
  }
};

var reducerForgotPassword = function reducerForgotPassword() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constant.FORGOT_PASSWORD:
      return Object.assign({}, state, { login: false, message: action.payload });
    case _constant.FORGOT_PASSWORD_FAIL:
      return Object.assign({}, state, { login: false, message: action.payload });
    default:
      return state;
  }
};

exports.reducerLogin = reducerLogin;
exports.reducerForgotPassword = reducerForgotPassword;