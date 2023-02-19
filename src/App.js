import "./styles.css";
import React from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Form />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
