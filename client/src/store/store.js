import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

import rootReducer from "../reducer/index";

export const history = createHistory();
const historyMiddleware = routerMiddleware(history);
const logger = createLogger();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger, historyMiddleware)),
  );

  return store;
}
