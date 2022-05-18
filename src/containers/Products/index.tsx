import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/Products";
import Product from "../../components/Product";
import "./Products.css";

function Products() {
  const products = useSelector<State, State[]>((state) => state.products.value);

  return (
    <div className="displayProducts">
      {products.map((product) => {
        return (
          <Product
            name={product.name}
            price={product.price}
            img={product.img}
          />
        );
      })}
    </div>
  );
}
export default Products;
