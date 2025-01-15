import React, { useState } from "react";
import ProductList from "./components/ProductCard";
import Modal from "./components/Modal";
import { Button } from "@headlessui/react";
import "./styles/productList.css";
import { formInputList } from "./dataSource";
import { Input } from "./components/Input";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const renderFormInputList = formInputList.map((input) => (
    <div>
      <label htmlFor={input.id}>{input.label}</label>
      <Input type={input.type} id={input.id} name={input.name} />
    </div>
  ));
  return (
    <>
      <Button onClick={openModal}>Add a Product</Button>

      <ProductList />
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add a new Product">
        {renderFormInputList}
        <Button>Add</Button>
        <Button>Cancel</Button>
      </Modal>
    </>
  );
};

export default App;
