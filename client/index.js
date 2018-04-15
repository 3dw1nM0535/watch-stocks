import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import App from "./src/App";
import configureStore, { history } from "./src/store/store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept("./src/App", () => {
    const NextApp = require("./src/App").default;
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <NextApp />
        </Router>
      </Provider>,
      document.getElementById("root"),
    );
  });
}
