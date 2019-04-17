/*
 * Login Messages
 *
 * This contains all the text for the Login component.
 */
import { defineMessages } from "react-intl";

export default defineMessages({
  headerLogin: {
    id: "app.containers.Login.header",
    defaultMessage: "Welcome to Login"
  },
  email: {
    id: "app.containers.Login.email",
    defaultMessage: "Benutzerkennung"
  },
  username: {
    id: "app.containers.username.email",
    defaultMessage: "User name"
  },
  password: {
    id: "app.containers.Login.password",
    defaultMessage: "Passwort"
  },
  login: {
    id: "app.containers.Login.login",
    defaultMessage: "Login"
  },
  erroremail: {
    id: "app.containers.Login.errorEmail",
    defaultMessage: "Benutzerkennung falsch"
  },
  errorusername: {
    id: "app.containers.username.errorusername",
    defaultMessage: "User name"
  },
  errorPassword: {
    id: "app.containers.Login.errorPassword",
    defaultMessage: "Passwort falsch"
  },
  welcome: {
    id: "app.containers.Login.welcome",
    defaultMessage: "Willkommen"
  },
  forgot_password: {
    id: "forgot_password",
    defaultMessage: "Forgot Password"
  },
  required: {
    id: "required",
    defaultMessage: "This field is required"
  }
});
