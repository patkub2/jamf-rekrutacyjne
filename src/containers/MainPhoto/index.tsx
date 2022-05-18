import React from "react";
import "./MainPhoto.css";
import photo from "../../assets/photo.png";

function MainPhoto() {
  return (
    <section className="photo__container">
      <div className="grid">
        <div className="shadow" />
        <img src={photo} alt="" />
      </div>
    </section>
  );
}

export default MainPhoto;
