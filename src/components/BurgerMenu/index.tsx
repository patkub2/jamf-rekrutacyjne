import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useDispatch, useSelector } from "react-redux";
import { increment, State } from "../../redux/Counter";

import AddProductForm from "../AddProductForm";

import "./BurgerMenu.css";

function BurgerMenu() {
  const { open } = useSelector<State, any>((state) => state.open);
  const dispatch = useDispatch();

  // const Close = () => setMenuOpenState(false);

  return (
    <Menu
      right
      width="640px"
      isOpen={open}
      onOpen={() => dispatch(increment(true))}
      onClose={() => dispatch(increment(false))}
      customBurgerIcon={false}
    >
      <AddProductForm />
    </Menu>
  );
}

export default BurgerMenu;
