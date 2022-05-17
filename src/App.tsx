import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer from "./redux/Products";

import Main from "./pages/Main";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
