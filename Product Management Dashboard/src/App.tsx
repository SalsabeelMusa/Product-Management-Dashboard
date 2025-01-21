import React, { useState } from "react";
import ProductList from "./components/ProductCard";
import Modal from "./components/Modal";
import { Button } from "@headlessui/react";
import "./styles/productList.css";
import { formInputList, IformInputList, IProduct } from "./dataSource";
import { Input } from "./components/Input";
import { productValidation } from "./validation/productValidation";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<IProduct>({
    id: "",
    image: "",
    title: "",
    description: "",
    colors: [],
    price: "",
    category: {
      brandName: "",
      brandIcon: "",
    },
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  function closeModal() {
    setFormData({
      id: "",
      image: "",
      title: "",
      description: "",
      colors: [],
      price: "",
      category: {
        brandName: "",
        brandIcon: "",
      },
    });
    setIsOpen(false);
    setFormErrors({});
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value }; // Dynamically update the correct field

      const fieldError = productValidation(newData)[name];

      setFormErrors((prevErrors) => {
        // If the field is valid, remove the error from state
        if (!fieldError) {
          const { [name]: _, ...restErrors } = prevErrors;
          return restErrors;
        }
        return { ...prevErrors, [name]: fieldError };
      });

      console.log("Updated Form Data:", newData); // log every change
      return newData;
    });
  }
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const errors = productValidation(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      console.log("Validation Errors:", errors);
      return;
    }

    console.log("Final Form Data Submitted:", formData); // log form data

    closeModal();
  }

  const renderFormInputList = formInputList.map((input) => (
    <div key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={formData[input.name] || ""}
        onChange={handleInputChange}
      />

      {formErrors[input.name] && (
        <div className="error-message">{formErrors[input.name]}</div>
      )}
    </div>
  ));

  return (
    <>
      <Button onClick={openModal}>Add a Product</Button>

      <ProductList />
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add a new Product">
        <form onSubmit={handleSubmit}>
          {renderFormInputList}
          <Button type="submit">Add</Button>
          <Button type="button" onClick={closeModal}>
            Cancel
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default App;
