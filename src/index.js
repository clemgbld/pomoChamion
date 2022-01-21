import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import App from "./App";
import "./index.css";
import store from "./store";

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
