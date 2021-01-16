import React from "react";
import { Router } from "@reach/router";

import Navbar from "./components/navbar";

// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Privacy from "./pages/privacy";

export default function App() {
  return (
    <div>
      <Navbar/>
      {/* The router component lets us navigate between different pages smoothly */}
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Privacy path="/privacy" />
      </Router>
    </div>
  );
}