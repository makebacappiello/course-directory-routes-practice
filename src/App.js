import React from "react";
import { Route, Routes } from "react-router-dom";

//App components
import Home from "./components/Home";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
