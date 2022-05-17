import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import AddProductForm from "../AddProductForm";

import "./BurgerMenu.css";

function BurgerMenu() {
  const [menuOpenState, setMenuOpenState] = useState(false);

  // const Close = () => setMenuOpenState(false);

  return (
    <>
      <Menu
        right
        width="40%"
        isOpen={menuOpenState}
        onOpen={() => setMenuOpenState(true)}
        onClose={() => setMenuOpenState(false)}
        customBurgerIcon={false}
      >
        <AddProductForm />
      </Menu>
      <div className="navbar">
        <button type="button" onClick={() => setMenuOpenState(true)}>
          Dodaj nowy produkt
        </button>
      </div>
    </>
  );
}

export default BurgerMenu;
