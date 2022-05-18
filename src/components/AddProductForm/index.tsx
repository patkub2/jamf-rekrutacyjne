import React, { useState } from "react";
import "./AddProductForm.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/Products";
import { increment } from "../../redux/Counter";

function AddProductForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  function clear() {
    dispatch(
      addProduct({
        name,
        price,
        img,
      })
    );
    setName("");
    setPrice("");
    setImg("");
    dispatch(increment(false));
  }

  return (
    <div className="form__container">
      <div className="form__title">Dodawanie produktu</div>

      <div className="form__element">
        <span>Nazwa produktu</span>
        <span className="required">Pole wymagane</span>

        <input
          required
          className="form__input"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div className="form__element">
        <span>Cena produktu</span>
        <span className="required">Pole wymagane</span>

        <input
          required
          className="form__input"
          type="number"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
      </div>
      <div className="form__element">
        <span>Adres URL obrazka</span>
        <span className="required">Pole wymagane</span>

        <input
          required
          className="form__input"
          type="url"
          value={img}
          onChange={(event) => {
            setImg(event.target.value);
          }}
        />
      </div>
      <button className="form__button" type="button" onClick={clear}>
        {" "}
        Dodaj produkt
      </button>
    </div>
  );
}

export default AddProductForm;
