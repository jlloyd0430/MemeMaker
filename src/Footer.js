import React from "react";
import discord from "./images/discord-black-icon-1.png";
import twitter from "./images/twitter.png";
import website from "./images/webicon.png";
// import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a
          href="https://discord.gg/HhKQWPQTpm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={discord} alt="discord" className="icons" />
        </a>
        <a
          href="https://twitter.com/GalacticatsNFT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" className="icons" />
        </a>
        <a
          // href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={website} alt="website" className="icons" />
        </a>
      </div>
      <div className="copyright">&copy; {2023} Meme Dashboard.</div>
      <p className="info">
        inspired by{" "}
        <a href="https://mememachine.sappyseals.io" target="_blank">
          Sappyseals
        </a>
      </p>
    </footer>
  );
}
