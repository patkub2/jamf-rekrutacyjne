import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/Products";
import Product from "../../components/Product";
import "./Products.css";

function Products() {
  const products = useSelector<State, State[]>((state) => state.products.value);

  return (
    <section className="displayProducts">
      {products.map((product) => {
        return (
          <Product
            name={product.name}
            price={product.price}
            img={product.img}
            key={product.name}
          />
        );
      })}
    </section>
  );
}
export default Products;
