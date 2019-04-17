import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actFP } from "./action";
import FPForm from "./FPForm";
import Translate from "../../messages";
import { Link } from "react-router-dom";
class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null
    };

    this._changeField = this._changeField.bind(this);
    this._submitForm = this._submitForm.bind(this);
  }

  _changeField(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  _submitForm(e) {
    this.props.actFP({
      url: this.props.authConfig.forgotPassword.path,
      request: e,
      redirect: this.props.authConfig.forgotPassword.redirect
    });
  }

  render() {
    const { authConfig, isLabel, isForgotPassword, isLogin, theme, bgImage } = this.props;
    const { logo, name, width, forgotPassword } = authConfig;
    const { field } = forgotPassword;
    if (!theme) {
      return (
        <div className="Adux">
          <div className="Adux--auth">
            <div className="Adux--header text-center">
              {logo && <img src={logo} className="marB10" width={width} alt={name} />}
              {!logo && name && <h1>{name}</h1>}
            </div>
            <div className="Adux--content">
              <FPForm
                onSubmit={this._submitForm}
                buttonStyled="LoginSubmitButton"
                translate={Translate}
                isLabel={isLabel}
                field={field}
              />
              {isForgotPassword && (
                <div className="isForgotPassword marB10">
                  <Link to="/auht/login">{Translate.login.defaultMessage}</Link>
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
            <FPForm
              onSubmit={this._submitForm}
              buttonStyled="LoginSubmitButton"
              translate={Translate}
              isLabel={isLabel}
              field={field}
            />
            {isLogin && (
              <div className="isForgotPassword marB10">
                <Link to="/auth/login">{Translate.login.defaultMessage}</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

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
  authConfig: PropTypes.shape({
    forgotPassword: PropTypes.shape({
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
  actFP
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
