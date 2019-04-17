import { LOGIN, LOGIN_FAIL, FORGOT_PASSWORD, FORGOT_PASSWORD_FAIL } from "./constant";
const initialState = {
  login: false
};

const reducerLogin = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { login: true, message: "" });
    case LOGIN_FAIL:
      return Object.assign({}, state, { login: false, message: action.payload });
    default:
      return state;
  }
};

const reducerForgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return Object.assign({}, state, { login: false, message: action.payload });
    case FORGOT_PASSWORD_FAIL:
      return Object.assign({}, state, { login: false, message: action.payload });
    default:
      return state;
  }
};

export { reducerLogin, reducerForgotPassword };
