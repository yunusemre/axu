"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Languages = function Languages(languages) {
  return _react2.default.createElement(
    "select",
    null,
    languages.map(function (res) {
      return _react2.default.createElement(
        "option",
        { key: res, value: res },
        res
      );
    })
  );
};

exports.default = Languages;