import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRouter from "./router/PublicRouter";
import PrivateRouter from "./router/PrivateRouter";

function App() {
  return (
    <Router>
      <PublicRouter />
      <PrivateRouter />
    </Router>
  );
}

export default App;
