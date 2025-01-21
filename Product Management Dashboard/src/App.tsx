import React, { useState } from "react";
import ProductList from "./components/ProductCard";
import Modal from "./components/Modal";
import { Button } from "@headlessui/react";
import "./styles/productList.css";
import { colors, formInputList, IformInputList, IProduct } from "./dataSource";
import { Input } from "./components/Input";
import { productValidation } from "./validation/productValidation";
import CircleColor from "./components/CircleColor";
import { v4 as uuidv4 } from "uuid";

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
  const [productColors, setProductColors] = useState<string[]>([]);
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

  //render
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

  //render

  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (productColors.includes(color)) {
          setProductColors((prev) => prev.filter((item) => item != color));
          return;
        }
        setProductColors((prev) => [...prev, color]);
      }}
    />
  ));

  console.log(colors);

  return (
    <>
      <Button onClick={openModal}>Add a Product</Button>

      <ProductList />
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add a new Product">
        <form onSubmit={handleSubmit}>
          {renderFormInputList}
          <div style={{ width: "300px" }}>{renderProductColors}</div>
          <div
            style={{
              width: "300px",
              color: "white",
              padding: "10px",
            }}
          >
            {productColors.map((color) => (
              <span
                key={uuidv4()} // Generates a unique key
                style={{
                  display: "inline-block",
                  backgroundColor: color, // Apply color to each span
                  margin: "2px",
                  fontSize: "15px",
                  borderRadius: "10%",
                  padding: "2px",
                }}
              >
                {color}
              </span>
            ))}
          </div>
          ;<Button type="submit">Add</Button>
          <Button type="button" onClick={closeModal}>
            Cancel
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default App;
