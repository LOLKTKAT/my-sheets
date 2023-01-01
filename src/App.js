import React from "react";
import Home from "./pages/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import "./app.css";
import Details from "./pages/details/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:courseID" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
