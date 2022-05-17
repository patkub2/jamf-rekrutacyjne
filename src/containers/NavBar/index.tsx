import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import AddProductForm from "../../components/AddProductForm";

import "./NavBar.css";
import jamflogo from "../../assets/jamf-logo.png";
import plusicon from "../../assets/plusicon.png";

function NavBar() {
  const [menuOpenState, setMenuOpenState] = useState(false);

  // const Close = () => setMenuOpenState(false);

  return (
    <>
      <Menu
        noOverlay
        right
        width="40%"
        isOpen={menuOpenState}
        onOpen={() => setMenuOpenState(true)}
        onClose={() => setMenuOpenState(false)}
        customBurgerIcon={false}
      >
        <AddProductForm />
      </Menu>
      <div className="container">
        <div className="navbar">
          <img src={jamflogo} alt="jamflogo" />
          <button
            className="button"
            type="button"
            onClick={() => setMenuOpenState(true)}
          >
            Dodaj nowy produkt <img src={plusicon} alt="jamflogo" />
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
