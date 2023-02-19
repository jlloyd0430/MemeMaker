import React from "react";
import gh from "./images/GitHub.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";
// import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a
          href="https://github.com/jlloyd0430"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gh} alt="github" className="icons" />
        </a>
        <a
          href="https://twitter.com/bitcoins_son"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" className="icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/jesse-lloyd-32456b215/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" className="icons" />
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
