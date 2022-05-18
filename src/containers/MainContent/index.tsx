import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../Products";

import { increment, State } from "../../redux/Counter";
import "./MainContent.css";

function MainContent() {
  const { open } = useSelector<State, any>((state) => state.open);
  const dispatch = useDispatch();
  return (
    <div className="main__container">
      <div className="welcome">
        <h1>{open}Zadanie rekrutacyjne na staż w Jamf</h1>
        <div className="card">
          <p>
            Poniżej wyświetlana jest lista produktów. Twoim zadaniem jest
            stworzenie mechanizmu, który będzie dodawał nowy produkt do listy.
            Powodzenia!
          </p>
          <button
            className="form__button"
            type="button"
            onClick={() => dispatch(increment(true))}
          >
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
