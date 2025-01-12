import React from "react";
import ProductList from "./components/ProductCard";
import Modal from "./components/Modal";

const App: React.FC = () => {
  return (
    <>
      <input type="button" value={"Add a Product"} />
      <ProductList />
      <Modal />
    </>
  );
};

export default App;
