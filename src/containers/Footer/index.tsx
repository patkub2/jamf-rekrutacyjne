import React from "react";
import "./footer.css";
import linkedinlogo from "../../assets/linkedin-logo.png";

function Footer() {
  return (
    <div className="footer__container">
      <p>©2022 Jamf. Wszelkie prawa zastrzeżone.</p>
      <img src={linkedinlogo} alt="linkedin" />
    </div>
  );
}

export default Footer;
