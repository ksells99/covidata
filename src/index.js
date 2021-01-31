import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/main.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter baseName='/covidata'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
