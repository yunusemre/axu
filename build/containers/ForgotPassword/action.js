"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actFP = undefined;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _constant = require("../../constant");

var _history = require("history");

var _reactReduxToastr = require("react-redux-toastr");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _history.createBrowserHistory)();

var isFP = function isFP(value) {
  return {
    type: _constant.FORGOT_PASSWORD,
    payload: value
  };
};
var isError = function isError(error) {
  return {
    type: _constant.FORGOT_PASSWORD_FAIL,
    payload: error
  };
};

var actFP = function actFP(params) {
  return function (dispatch) {
    (0, _axios2.default)({
      url: params.url,
      method: "POST",
      data: params.request
    }).then(function (res) {
      _reactReduxToastr.toastr.success("Your action is created successfully");
      dispatch(isFP(res.response));
      history.pushState(params.redirect);
    }).catch(function (err) {
      _reactReduxToastr.toastr.error(err.response.data);
      dispatch(isError(err.response.data));
    });
  };
};

exports.actFP = actFP;