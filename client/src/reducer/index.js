import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import stocks from "./stock";

export default combineReducers({
  stocks,
  router: routerReducer,
});
