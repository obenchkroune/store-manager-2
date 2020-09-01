import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./GlobalContext";
import ProductReducer, { initialState } from "./reducers/ProductReducer";

ReactDOM.render(
  <Provider reducer={ProductReducer} initialState={initialState}>
    <App />
  </Provider>,
  document.getElementById("root")
);
