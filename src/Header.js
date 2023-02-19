import React from "react";
import logo from "./images/troll-face.png";

export default function Header() {
  return (
    <header>
      <div className="logo-title">
        <img src={logo} alt="meme" class="logo" />
        <h2 className="title">Meme Dashboard</h2>
      </div>
    </header>
  );
}
