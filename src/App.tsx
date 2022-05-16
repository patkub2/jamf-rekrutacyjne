import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import usersReducer from "./features/Users";

import Main from "./pages/Main";

const store = configureStore({
  reducer: {
    users: usersReducer,
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
