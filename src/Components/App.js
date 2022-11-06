import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Beearray from "./Beearray";
import Tiroirs from "./Tiroirs";
import Info from "./Info";
import Footer from "./Footer";
import "../Styles/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Beearray />}></Route>;
          <Route exact path="/Beearray" element={<Beearray />}></Route>;
          <Route exact path="/Tiroirs" element={<Tiroirs />}></Route>
        </Routes>
        <Info />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
