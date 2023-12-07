import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

axios.get("http://localhost:3001/persons").then((res) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
