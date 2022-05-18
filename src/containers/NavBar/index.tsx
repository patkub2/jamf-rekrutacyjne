import React from "react";

import { useDispatch } from "react-redux";
import { increment } from "../../redux/Counter";

import "./NavBar.css";
import jamflogo from "../../assets/jamf-logo.png";
import plusicon from "../../assets/plusicon.png";

function NavBar() {
  const dispatch = useDispatch();

  // const Close = () => setMenuOpenState(false);

  return (
    <section className="navbar">
      <img src={jamflogo} alt="jamflogo" />
      <button
        className="button"
        type="button"
        onClick={() => dispatch(increment(true))}
      >
        Dodaj nowy produkt <img src={plusicon} alt="jamflogo" />
      </button>
    </section>
  );
}

export default NavBar;
