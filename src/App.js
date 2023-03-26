import "./styles.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Form from "./Home";
import Create from "./Create";
import Browse from "./Browse";
import Gc from "./Gc";
import Footer from "./Footer";
// import backgroundImage from "./images/homeimg.JPG";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div className="row" style={{ height: "100%" }}>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/create" element={<Create />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/gc" element={<Gc />} />
          </Routes>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
