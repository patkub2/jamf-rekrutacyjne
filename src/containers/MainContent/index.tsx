import React from "react";
import Products from "../Products";
import "./MainContent.css";

function MainContent() {
  console.log("sad");
  return (
    <div className="main__container">
      <div className="welcome">
        <h1>Zadanie rekrutacyjne na staż w Jamf</h1>
        <div className="card">
          <p>
            Poniżej wyświetlana jest lista produktów. Twoim zadaniem jest
            stworzenie mechanizmu, który będzie dodawał nowy produkt do listy.
            Powodzenia!
          </p>
          <button className="form__button" type="button">
            {" "}
            Dodaj produkt
          </button>
        </div>
      </div>

      <div className="apple">Urządzenia Apple</div>
      <Products />
    </div>
  );
}

export default MainContent;
