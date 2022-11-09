import React from "react";
import ReactDOM from "react-dom/client";
import Widget from "./widget";
import "./index.css";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Widget />
  </React.StrictMode>
);
