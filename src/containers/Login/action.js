import axios from "axios";
import { toastr } from "react-redux-toastr";
import { LOGIN, LOGIN_FAIL } from "../../constant";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const isLogin = value => {
  return {
    type: LOGIN,
    payload: value
  };
};
const isError = error => {
  return {
    type: LOGIN_FAIL,
    payload: error
  };
};

const actLogin = params => dispatch => {
  axios({
    url: params.url,
    method: "POST",
    data: params.request
  })
    .then(res => {
      toastr.success("Welcome");
      dispatch(isLogin(res.response));
      history.pushState(params.redirect);
    })
    .catch(err => {
      toastr.error(err.response.data);
      dispatch(isError(err.response.data));
    });
};

export { actLogin };
