import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { NBAStatTracker } from "./NBAStatTracker";
import { BrowserRouter as Router } from "react-router-dom";
require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NBAStatTracker />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
