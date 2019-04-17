/*
 * Login Messages
 *
 * This contains all the text for the Login component.
 */
import { defineMessages } from "react-intl";

export default defineMessages({
    header: {
        id: "app.containers.Login.header",
        defaultMessage: "This is Login container !"
    },
    email: {
        id: "app.containers.Login.email",
        defaultMessage: "Benutzerkennung"
    },
    password: {
        id: "app.containers.Login.password",
        defaultMessage: "Passwort"
    },
    login: {
        id: "app.containers.Login.login",
        defaultMessage: "Login"
    },
    errorEmail: {
        id: "app.containers.Login.errorEmail",
        defaultMessage: "Benutzerkennung falsch"
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
        defaultMessage: "Forget Password"
    }
});
