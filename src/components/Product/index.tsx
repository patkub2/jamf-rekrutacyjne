import React from "react";
import "./styles.css";

type Props = {
  name: string;
  price: number;
  img: string;
};

function Product(props: Props) {
  const { name, price, img } = props;
  return (
    <div>
      <h1> {name}</h1>
      <h1> {price}</h1>
      <img src={img} alt={name} />
    </div>
  );
}

export default Product;