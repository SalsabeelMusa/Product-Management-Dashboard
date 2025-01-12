import React from "react";
import ProductList from "./components/ProductList"; // Import ProductList
import Modal from "./components/Modal";

const App: React.FC = () => {
  return (
    <>
      <input type="button" value={"Add a Product"} />
      <ProductList /> {/* This will display all the products */}
      <Modal />
    </>
  );
};

export default App;
