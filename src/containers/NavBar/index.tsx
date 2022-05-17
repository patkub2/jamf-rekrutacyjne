/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import "./styles.css";

function Navbar() {
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span />
      </label>

      <ul className="menu__box">
        <li>Home</li>
        <li>About</li>
        <li>Team</li>
        <li>Contact</li>
        <li>Twitter</li>
      </ul>
    </div>
  );
}

export default Navbar;
