import React from "react";
import { Form, Field } from "react-final-form";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import Translate from "../../messages";

const required = value => (value ? undefined : Translate.required.defaultMessage);

const LoginForm = ({ onSubmit, isLabel, field, buttonStyled }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, submitting }) => (
      <form className="submitForm text-left" onSubmit={handleSubmit}>
        <Field name="email" validate={required}>
          {({ input, meta }) => {
            const selectedField = Translate[field].defaultMessage;
            return (
              <div className="form-fields marB10">
                {isLabel && <label>{selectedField}</label>}
                <input
                  {...input}
                  type={field !== "email" ? "text" : field}
                  name={field}
                  placeholder={selectedField}
                />
                {meta.error && meta.touched && (
                  <div className="errorFields">
                    <FormattedMessage {...Translate["error" + field]} />
                  </div>
                )}
              </div>
            );
          }}
        </Field>
        <Field name="password" validate={required}>
          {({ input, meta }) => (
            <div className="form-fields marB10">
              {isLabel && <FormattedMessage {...Translate.password} />}
              <input
                {...input}
                type="password"
                name="password"
                placeholder={Translate.password.defaultMessage}
              />
              {meta.error && meta.touched && (
                <div className="errorFields">
                  <FormattedMessage {...Translate.errorPassword} />
                </div>
              )}
            </div>
          )}
        </Field>

        <div className="form-fields text-center">
          <button type="submit" className={buttonStyled} disabled={submitting}>
            <FormattedMessage
              id={Translate.login.id}
              defaultMessage={Translate.login.defaultMessage}
            />
          </button>
        </div>
      </form>
    )}
  />
);

LoginForm.defaultProps = {
  onSubmit: () => {},
  isLabel: false,
  buttonStyled: "LoginSubmitButton",
  field: "email"
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLabel: PropTypes.bool,
  buttonStyled: PropTypes.string,
  field: PropTypes.string
};

export default LoginForm;
