import React from "react";
import { Form, Field } from "react-final-form";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import translate from "../../messages";

const required = value => (value ? undefined : "This field is required");

const FPForm = ({ onSubmit, isLabel, buttonStyled, field }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, submitting }) => (
      <form className="submitForm text-left" onSubmit={handleSubmit}>
        <Field name="email" validate={required}>
          {({ input, meta }) => (
            <div className="form-fields marB10">
              {isLabel && <label>{translate[field].defaultMessage}</label>}
              <input
                {...input}
                type={field !== "email" ? "text" : field}
                name={field}
                placeholder={translate[field].defaultMessage}
              />
              {meta.error && meta.touched && (
                <div className="errorFields">
                  <FormattedMessage
                    id={translate["error" + field].id}
                    defaultMessage={translate["error" + field].defaultMessage}
                  />
                </div>
              )}
            </div>
          )}
        </Field>

        <div className="form-fields text-center">
          <button type="submit" className={buttonStyled} disabled={submitting}>
            <FormattedMessage
              id={translate.login.id}
              defaultMessage={translate.forgot_password.defaultMessage}
            />
          </button>
        </div>
      </form>
    )}
  />
);

FPForm.defaultProps = {
  onSubmit: () => {},
  isLabel: false,
  buttonStyled: "LoginSubmitButton"
};

FPForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLabel: PropTypes.bool,
  buttonStyled: PropTypes.string
};

export default FPForm;
