import React from "react";
import "./product.css";

type Props = {
  name: string;
  price: number;
  img: string;
};

function Product(props: Props) {
  const { name, price, img } = props;
  return (
    <div className="product__container">
      <img className="img" src={img} alt={name} />
      <h4 className="name"> {name}</h4>
      <h5 className="price"> {price} zł</h5>
    </div>
  );
}

export default Product;
