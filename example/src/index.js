import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import registerServiceWorker from "./registerServiceWorker";
import Root from "./Root";
import ReduxToastr from "react-redux-toastr";
import { store } from "./store/";
import "./index.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

render(
  <Provider store={store}>
    <div>
      <Root />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
