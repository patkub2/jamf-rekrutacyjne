import React, { useState } from "react";
import "./AddProductForm.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/Products";

function AddProductForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  return (
    <div className="form__container">
      <div className="form__title">Dodawanie produktu</div>

      <div className="form__element">
        <span>Nazwa produktu</span>
        <span className="required">Pole wymagane</span>

        <input
          className="form__input"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div className="form__element">
        <span>Cena produktu</span>
        <span className="required">Pole wymagane</span>

        <input
          className="form__input"
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
      </div>
      <div className="form__element">
        <span>Adres URL obrazka</span>
        <span className="required">Pole wymagane</span>

        <input
          className="form__input"
          type="text"
          onChange={(event) => {
            setImg(event.target.value);
          }}
        />
      </div>
      <button
        className="form__button"
        type="button"
        onClick={() => {
          dispatch(
            addProduct({
              name,
              price,
              img,
            })
          );
        }}
      >
        {" "}
        Dodaj produkt
      </button>
    </div>
  );
}

export default AddProductForm;
