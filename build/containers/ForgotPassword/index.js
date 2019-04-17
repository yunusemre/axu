"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require("react-redux");

var _action = require("./action");

var _FPForm = require("./FPForm");

var _FPForm2 = _interopRequireDefault(_FPForm);

var _messages = require("../../messages");

var _messages2 = _interopRequireDefault(_messages);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForgotPassword = function (_React$Component) {
  _inherits(ForgotPassword, _React$Component);

  function ForgotPassword(props) {
    _classCallCheck(this, ForgotPassword);

    var _this = _possibleConstructorReturn(this, (ForgotPassword.__proto__ || Object.getPrototypeOf(ForgotPassword)).call(this, props));

    _this.state = {
      email: null
    };

    _this._changeField = _this._changeField.bind(_this);
    _this._submitForm = _this._submitForm.bind(_this);
    return _this;
  }

  _createClass(ForgotPassword, [{
    key: "_changeField",
    value: function _changeField(e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "_submitForm",
    value: function _submitForm(e) {
      this.props.actFP({
        url: this.props.authConfig.forgotPassword.path,
        request: e,
        redirect: this.props.authConfig.forgotPassword.redirect
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          authConfig = _props.authConfig,
          isLabel = _props.isLabel,
          isForgotPassword = _props.isForgotPassword,
          isLogin = _props.isLogin,
          theme = _props.theme,
          bgImage = _props.bgImage;
      var logo = authConfig.logo,
          name = authConfig.name,
          width = authConfig.width,
          forgotPassword = authConfig.forgotPassword;
      var field = forgotPassword.field;

      if (!theme) {
        return _react2.default.createElement(
          "div",
          { className: "Adux" },
          _react2.default.createElement(
            "div",
            { className: "Adux--auth" },
            _react2.default.createElement(
              "div",
              { className: "Adux--header text-center" },
              logo && _react2.default.createElement("img", { src: logo, className: "marB10", width: width, alt: name }),
              !logo && name && _react2.default.createElement(
                "h1",
                null,
                name
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "Adux--content" },
              _react2.default.createElement(_FPForm2.default, {
                onSubmit: this._submitForm,
                buttonStyled: "LoginSubmitButton",
                translate: _messages2.default,
                isLabel: isLabel,
                field: field
              }),
              isForgotPassword && _react2.default.createElement(
                "div",
                { className: "isForgotPassword marB10" },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: "/auht/login" },
                  _messages2.default.login.defaultMessage
                )
              )
            )
          )
        );
      }

      return _react2.default.createElement(
        "div",
        { className: "Adux-theme" },
        _react2.default.createElement("div", { className: "Adux-fullbackgorund", style: { backgroundImage: "url(" + bgImage + ")" } }),
        _react2.default.createElement(
          "div",
          { className: "Adux-content text-center" },
          _react2.default.createElement(
            "div",
            { className: "Adux-content-header" },
            logo && _react2.default.createElement("img", { src: logo, width: width, alt: name }),
            _react2.default.createElement(
              "div",
              { className: "Adux-content-header__title" },
              _messages2.default.welcome.defaultMessage
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "Adux-content-wrapper" },
            _react2.default.createElement(_FPForm2.default, {
              onSubmit: this._submitForm,
              buttonStyled: "LoginSubmitButton",
              translate: _messages2.default,
              isLabel: isLabel,
              field: field
            }),
            isLogin && _react2.default.createElement(
              "div",
              { className: "isForgotPassword marB10" },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/auth/login" },
                _messages2.default.login.defaultMessage
              )
            )
          )
        )
      );
    }
  }]);

  return ForgotPassword;
}(_react2.default.Component);

ForgotPassword.defaultProps = {
  authConfig: {
    name: "Adesso",
    forgotPassword: {
      path: "/auth/forgot-password",
      redirect: "/login",
      field: "email"
    }
  },
  isLabel: false,
  isForgotPassword: false,
  field: "",
  theme: false,
  bgImage: ""
};

ForgotPassword.propTypes = {
  authConfig: _propTypes2.default.shape({
    forgotPassword: _propTypes2.default.shape({
      path: _propTypes2.default.string,
      redirect: _propTypes2.default.string,
      field: _propTypes2.default.string
    })
  }),
  isLabel: _propTypes2.default.bool,
  isForgotPassword: _propTypes2.default.bool,
  theme: _propTypes2.default.bool,
  bgImage: _propTypes2.default.string
};

var mapStateToProps = function mapStateToProps(state) {
  return {};
};
var mapDispatchToProps = {
  actFP: _action.actFP
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ForgotPassword);