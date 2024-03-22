import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
// import Loader from "./components/Loader/Loader";
import Home from "./components/Home";
import Add from "./components/Add";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Add" element={<Add />} />
          {/* <Route path="/Loader" element={<Loader />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
