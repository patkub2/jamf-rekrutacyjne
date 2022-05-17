import React from "react";
import AddProductForm from "../components/AddProductForm";
import NavBar from "../containers/NavBar";
import Users from "../containers/Users";

function Main() {
  return (
    <div>
      <NavBar />
      <AddProductForm />
      <Users />
    </div>
  );
}

export default Main;
