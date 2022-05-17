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
    <div className="navbar">
      <div className="addProduct">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Price..."
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Img..."
          onChange={(event) => {
            setImg(event.target.value);
          }}
        />
        <button
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
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddProductForm;
