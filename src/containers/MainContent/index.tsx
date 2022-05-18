import React from "react";
import { useDispatch } from "react-redux";
import Products from "../Products";

import { increment } from "../../redux/Counter";
import "./MainContent.css";

function MainContent() {
  const dispatch = useDispatch();
  return (
    <section className="main__container">
      <div className="welcome">
        <h1>Zadanie rekrutacyjne na staż w Jamf</h1>
        <div className="card">
          <p>
            Poniżej wyświetlana jest lista produktów. Twoim zadaniem jest
            stworzenie mechanizmu, który będzie dodawał nowy produkt do listy.
            Powodzenia!
          </p>
          <button
            className="button"
            type="button"
            onClick={() => dispatch(increment(true))}
          >
            {" "}
            Dodaj nowy produkt
          </button>
        </div>
      </div>

      <div className="apple">Urządzenia Apple</div>
      <Products />
    </section>
  );
}

export default MainContent;
