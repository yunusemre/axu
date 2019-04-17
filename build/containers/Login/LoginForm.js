"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactFinalForm = require("react-final-form");

var _reactIntl = require("react-intl");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _messages = require("../../messages");

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var required = function required(value) {
  return value ? undefined : _messages2.default.required.defaultMessage;
};

var LoginForm = function LoginForm(_ref) {
  var onSubmit = _ref.onSubmit,
      isLabel = _ref.isLabel,
      field = _ref.field,
      buttonStyled = _ref.buttonStyled;
  return _react2.default.createElement(_reactFinalForm.Form, {
    onSubmit: onSubmit,
    render: function render(_ref2) {
      var handleSubmit = _ref2.handleSubmit,
          submitting = _ref2.submitting;
      return _react2.default.createElement(
        "form",
        { className: "submitForm text-left", onSubmit: handleSubmit },
        _react2.default.createElement(
          _reactFinalForm.Field,
          { name: "email", validate: required },
          function (_ref3) {
            var input = _ref3.input,
                meta = _ref3.meta;

            var selectedField = _messages2.default[field].defaultMessage;
            return _react2.default.createElement(
              "div",
              { className: "form-fields marB10" },
              isLabel && _react2.default.createElement(
                "label",
                null,
                selectedField
              ),
              _react2.default.createElement("input", _extends({}, input, {
                type: field !== "email" ? "text" : field,
                name: field,
                placeholder: selectedField
              })),
              meta.error && meta.touched && _react2.default.createElement(
                "div",
                { className: "errorFields" },
                _react2.default.createElement(_reactIntl.FormattedMessage, _messages2.default["error" + field])
              )
            );
          }
        ),
        _react2.default.createElement(
          _reactFinalForm.Field,
          { name: "password", validate: required },
          function (_ref4) {
            var input = _ref4.input,
                meta = _ref4.meta;
            return _react2.default.createElement(
              "div",
              { className: "form-fields marB10" },
              isLabel && _react2.default.createElement(_reactIntl.FormattedMessage, _messages2.default.password),
              _react2.default.createElement("input", _extends({}, input, {
                type: "password",
                name: "password",
                placeholder: _messages2.default.password.defaultMessage
              })),
              meta.error && meta.touched && _react2.default.createElement(
                "div",
                { className: "errorFields" },
                _react2.default.createElement(_reactIntl.FormattedMessage, _messages2.default.errorPassword)
              )
            );
          }
        ),
        _react2.default.createElement(
          "div",
          { className: "form-fields text-center" },
          _react2.default.createElement(
            "button",
            { type: "submit", className: buttonStyled, disabled: submitting },
            _react2.default.createElement(_reactIntl.FormattedMessage, {
              id: _messages2.default.login.id,
              defaultMessage: _messages2.default.login.defaultMessage
            })
          )
        )
      );
    }
  });
};

LoginForm.defaultProps = {
  onSubmit: function onSubmit() {},
  isLabel: false,
  buttonStyled: "LoginSubmitButton",
  field: "email"
};

LoginForm.propTypes = {
  onSubmit: _propTypes2.default.func.isRequired,
  isLabel: _propTypes2.default.bool,
  buttonStyled: _propTypes2.default.string,
  field: _propTypes2.default.string
};

exports.default = LoginForm;