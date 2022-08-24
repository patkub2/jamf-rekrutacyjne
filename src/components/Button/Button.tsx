import React from "react";
import "./footer.css";
import linkedinlogo from "../../assets/linkedin-logo.png";

function Button() {
  return (
    <footer className="footer__container">
      <p>©2022 Jamf. Wszelkie prawa zastrzeżone.</p>
      <img src={linkedinlogo} alt="linkedin" />
    </footer>
  );
}

export default Button;
