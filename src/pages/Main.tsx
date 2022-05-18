import React from "react";
import MainPhoto from "../containers/MainPhoto";

import NavBar from "../containers/NavBar";

import "./styles.css";

function Main() {
  return (
    <div className="container">
      <NavBar />
      <MainPhoto />
    </div>
  );
}

export default Main;
