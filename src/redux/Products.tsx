import { createSlice } from "@reduxjs/toolkit";

import { ProductsData } from "../data/Data";

export interface State {
  name: string;
  price: number;
  img: string;
  products: { name: string; price: number; img: string; value: any };
}

export const productSlice = createSlice({
  name: "products",
  initialState: { value: ProductsData },
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
