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
    if (img.includes("https://") === true && name !== "" && price !== "") {
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
  }

  return (
    <section className="form__container">
      <span className="title">Dodawanie produktu</span>

      <div className="element">
        <span>Nazwa produktu</span>
        <span className="required">Pole wymagane</span>

        <input
          required
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div className="element">
        <span>Cena produktu</span>
        <span className="required">Pole wymagane</span>

        <input
          required
          type="number"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
      </div>
      <div className="element">
        <span>Adres URL obrazka</span>
        <span className="required">Pole wymagane</span>

        <input
          required
          type="url"
          value={img}
          onChange={(event) => {
            setImg(event.target.value);
          }}
        />
      </div>
      <button className="button" type="button" onClick={clear}>
        {" "}
        Dodaj produkt
      </button>
    </section>
  );
}

export default AddProductForm;
