import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reducer from "../reducers";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
export const history = createBrowserHistory();

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware(thunkMiddleware);
  } else {
    return applyMiddleware(thunkMiddleware, createLogger());
  }
};

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));
