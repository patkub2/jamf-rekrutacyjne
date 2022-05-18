import { configureStore } from "@reduxjs/toolkit";
import openReducer from "./Counter";
// import { Provider } from "react-redux";
import productsReducer from "./Products";

export default configureStore({
  reducer: {
    open: openReducer,
    products: productsReducer,
  },
});
