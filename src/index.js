import React from "react";
import ReactDOM from "react-dom/client";

import "./css/style.css";
import "./css/normalize.css";

import App from "./App";

// import AppProvider

import { AppProvider } from "./Features/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
