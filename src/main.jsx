import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "../src/Nav componet/Nav";
import App from "../src/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
      <Nav />
  </React.StrictMode>
);
