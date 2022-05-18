/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export interface State {
  open: any;
}

export const openSlice = createSlice({
  name: "open",
  initialState: {
    open: false,
  },
  reducers: {
    increment: (state, action) => {
      state.open = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = openSlice.actions;

export default openSlice.reducer;
