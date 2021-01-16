import React from "react";
import { Router } from "@reach/router";

import Navbar from "./components/navbar";

// Pages
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import Verification from "./pages/verification";

export default function App() {
  return (
    <div>
      <Navbar/>
      {/* The router component lets us navigate between different pages smoothly */}
      <Router>
        <Home path="/" />
        <Privacy path="/privacy" />
        <Verification path="/verification" />
      </Router>
    </div>
  );
}