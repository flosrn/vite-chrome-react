import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const pullRequestTitleSelector = ".js-title-edit-button";
const titleElement = document.querySelector(pullRequestTitleSelector);

const root = document.createElement("div");
root.id = "crx-root";
titleElement?.after(root);

console.log("root", root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
