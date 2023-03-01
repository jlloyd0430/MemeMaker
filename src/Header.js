import React, { useState, Fragment } from "react";
import logo from "./images/pepe.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const toggleMenu = (page) => {
    setMenuOpen(!menuOpen);
    setCurrentPage(page);
  };

  return (
    <header>
      <Fragment>
        {menuOpen ? (
          <div className="menu">
            <ul>
              <li onClick={() => toggleMenu("derpbirds")}>Derpbirds</li>
              <li onClick={() => toggleMenu("dbagmfers")}>Dbagmfers</li>
            </ul>
          </div>
        ) : (
          <div className="logo-title">
            <img src={logo} alt="meme" className="logo" />
            <h1 className="title">Meme Dashboard</h1>
          </div>
        )}
      </Fragment>
      <div className="menu-icon" onClick={() => toggleMenu("")}>
        <i className="fa fa-bars"></i>
      </div>
    </header>
  );
}

