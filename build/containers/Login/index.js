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

var _LoginForm = require("./LoginForm");

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _messages = require("../../messages");

var _messages2 = _interopRequireDefault(_messages);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    localStorage.clear();
    _this._submitForm = _this._submitForm.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: "_submitForm",
    value: function _submitForm(e) {
      this.props.actLogin({
        url: this.props.authConfig.login.path,
        request: e,
        redirect: this.props.authConfig.login.redirect
      });
    }
  }, {
    key: "_showPassword",
    value: function _showPassword(e) {
      var element = e.target.name;
      console.log(element);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          authConfig = _props.authConfig,
          isLabel = _props.isLabel,
          isForgotPassword = _props.isForgotPassword,
          theme = _props.theme,
          bgImage = _props.bgImage;
      var logo = authConfig.logo,
          name = authConfig.name,
          width = authConfig.width,
          login = authConfig.login;
      var field = login.field;

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
              _react2.default.createElement(_LoginForm2.default, {
                onSubmit: this._submitForm,
                buttonStyled: "LoginSubmitButton",
                isLabel: isLabel,
                field: field
              }),
              isForgotPassword && _react2.default.createElement(
                "div",
                { className: "isForgotPassword" },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: "/auth/forgot-password" },
                  "Forgot password"
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
            _react2.default.createElement(_LoginForm2.default, {
              onShowPassword: this._showPassword,
              onSubmit: this._submitForm,
              translate: _messages2.default,
              isLabel: isLabel,
              field: field
            }),
            isForgotPassword && _react2.default.createElement(
              "div",
              { className: "isForgotPassword marB10" },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/auth/forgot-password" },
                _messages2.default.forgot_password.defaultMessage
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

Login.defaultProps = {
  authConfig: {
    name: "Adesso",
    login: {
      path: "/auth/login",
      redirect: "/",
      field: "email"
    }
  },
  isLabel: false,
  isForgotPassword: false,
  field: "",
  theme: false,
  bgImage: ""
};

Login.propTypes = {
  authConfig: _propTypes2.default.shape({
    login: _propTypes2.default.shape({
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
  actLogin: _action.actLogin
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);