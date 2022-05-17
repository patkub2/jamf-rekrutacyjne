import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/Products";
import Product from "../../components/Product";
import "./styles.css";

function Users() {
  const products = useSelector<State, State[]>((state) => state.products.value);

  return (
    <div className="displayUsers">
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
export default Users;
