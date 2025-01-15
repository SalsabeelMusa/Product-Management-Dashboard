import React, { useState } from "react";
import ProductList from "./components/ProductCard";
import Modal from "./components/Modal";
import { Button } from "@headlessui/react";
import "./styles/productList.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Button onClick={openModal}>Add a Product</Button>

      <ProductList />
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add a new Product">
        <Button>Add</Button>
        <Button>Cancel</Button>
      </Modal>
    </>
  );
};

export default App;
