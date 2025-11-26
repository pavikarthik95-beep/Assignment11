import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";


import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<Router basename={process.env.NODE_ENV === "production" ? "/Assignment11" : "/"}> <App /> </Router>
);
