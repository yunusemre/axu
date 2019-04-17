import axios from "axios";
import { FORGOT_PASSWORD, FORGOT_PASSWORD_FAIL } from "../../constant";
import { createBrowserHistory } from "history";
import { toastr } from "react-redux-toastr";

const history = createBrowserHistory();

const isFP = value => {
  return {
    type: FORGOT_PASSWORD,
    payload: value
  };
};
const isError = error => {
  return {
    type: FORGOT_PASSWORD_FAIL,
    payload: error
  };
};

const actFP = params => dispatch => {
  axios({
    url: params.url,
    method: "POST",
    data: params.request
  })
    .then(res => {
      toastr.success("Your action is created successfully");
      dispatch(isFP(res.response));
      history.pushState(params.redirect);
    })
    .catch(err => {
      toastr.error(err.response.data);
      dispatch(isError(err.response.data));
    });
};

export { actFP };
