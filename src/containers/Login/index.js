import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actLogin } from "./action";
import LoginForm from "./LoginForm";
import Translate from "../../messages";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    localStorage.clear();
    this._submitForm = this._submitForm.bind(this);
  }

  _submitForm(e) {
    this.props.actLogin({
      url: this.props.authConfig.login.path,
      request: e,
      redirect: this.props.authConfig.login.redirect
    });
  }

  _showPassword(e) {
    const element = e.target.name;
    console.log(element);
  }

  render() {
    const { authConfig, isLabel, isForgotPassword, theme, bgImage } = this.props;
    const { logo, name, width, login } = authConfig;
    const { field } = login;
    if (!theme) {
      return (
        <div className="Adux">
          <div className="Adux--auth">
            <div className="Adux--header text-center">
              {logo && <img src={logo} className="marB10" width={width} alt={name} />}
              {!logo && name && <h1>{name}</h1>}
            </div>
            <div className="Adux--content">
              <LoginForm
                onSubmit={this._submitForm}
                buttonStyled="LoginSubmitButton"
                isLabel={isLabel}
                field={field}
              />
              {isForgotPassword && (
                <div className="isForgotPassword">
                  <Link to="/auth/forgot-password">Forgot password</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="Adux-theme">
        <div className="Adux-fullbackgorund" style={{ backgroundImage: `url(${bgImage})` }} />
        <div className="Adux-content text-center">
          <div className="Adux-content-header">
            {logo && <img src={logo} width={width} alt={name} />}
            <div className="Adux-content-header__title">{Translate.welcome.defaultMessage}</div>
          </div>
          <div className="Adux-content-wrapper">
            <LoginForm
              onShowPassword={this._showPassword}
              onSubmit={this._submitForm}
              translate={Translate}
              isLabel={isLabel}
              field={field}
            />
            {isForgotPassword && (
              <div className="isForgotPassword marB10">
                <Link to="/auth/forgot-password">{Translate.forgot_password.defaultMessage}</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

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
  authConfig: PropTypes.shape({
    login: PropTypes.shape({
      path: PropTypes.string,
      redirect: PropTypes.string,
      field: PropTypes.string
    })
  }),
  isLabel: PropTypes.bool,
  isForgotPassword: PropTypes.bool,
  theme: PropTypes.bool,
  bgImage: PropTypes.string
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {
  actLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
