//# Global import
import React from "react";
import ReactDOM from "react-dom/client";

//# Local import
import App from "./layouts/App";

//# assets import
import "./assets/css/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
