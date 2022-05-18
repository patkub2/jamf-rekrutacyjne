import React from "react";
import MainContent from "../containers/MainContent";
import MainPhoto from "../containers/MainPhoto";

import NavBar from "../containers/NavBar";

import "./styles.css";

function Main() {
  return (
    <div className="container">
      <NavBar />
      <MainPhoto />
      <MainContent />
    </div>
  );
}

export default Main;
