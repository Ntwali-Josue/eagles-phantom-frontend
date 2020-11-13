import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

const title = "React with Webpack and Babel";
ReactDOM.render(
  <Provider store={store}>
    <App title={title} />
  </Provider>,
  document.querySelector("#root")
);
module.hot.accept();
