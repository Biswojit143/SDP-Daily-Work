import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PreferenceProvider } from "./context/PreferenceContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PreferenceProvider>
    <App />
  </PreferenceProvider>
);