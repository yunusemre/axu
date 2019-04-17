"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actLogin = undefined;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _reactReduxToastr = require("react-redux-toastr");

var _constant = require("../../constant");

var _history = require("history");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _history.createBrowserHistory)();

var isLogin = function isLogin(value) {
  return {
    type: _constant.LOGIN,
    payload: value
  };
};
var isError = function isError(error) {
  return {
    type: _constant.LOGIN_FAIL,
    payload: error
  };
};

var actLogin = function actLogin(params) {
  return function (dispatch) {
    (0, _axios2.default)({
      url: params.url,
      method: "POST",
      data: params.request
    }).then(function (res) {
      _reactReduxToastr.toastr.success("Welcome");
      dispatch(isLogin(res.response));
      history.pushState(params.redirect);
    }).catch(function (err) {
      _reactReduxToastr.toastr.error(err.response.data);
      dispatch(isError(err.response.data));
    });
  };
};

exports.actLogin = actLogin;