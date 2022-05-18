import React from "react";
import BurgerMenu from "../components/BurgerMenu";
import MainContent from "../containers/MainContent";
import MainPhoto from "../containers/MainPhoto";

import NavBar from "../containers/NavBar";

import "./styles.css";

function Main() {
  return (
    <>
      <BurgerMenu />
      <div className="container">
        <NavBar />
        <MainPhoto />
        <MainContent />
      </div>
    </>
  );
}

export default Main;
