import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import { reducerLogin, reducerForgotPassword } from "axu";

export default combineReducers({
  reducerLogin,
  toastr: toastrReducer,
  reducerForgotPassword
});
