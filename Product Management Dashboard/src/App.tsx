import React, { FormEvent, useState } from "react";
import ProductList from "./components/ProductCard";
import Modal from "./components/Modal";
import { Button } from "@headlessui/react";
import "./styles/productList.css";
import {
  categories,
  colors,
  formInputList,
  ICategory,
  IProduct,
  productData,
} from "./dataSource";
import { Input } from "./components/Input";
import { productValidation } from "./validation/productValidation";
import CircleColor from "./components/CircleColor";
import { v4 as uuidv4 } from "uuid";
import Select from "./components/Select";

const App = () => {
  //STATES
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<IProduct>({
    id: "",
    image: "",
    title: "",
    description: "",
    colors: [],
    price: "",
    category: categories[0],
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [productColors, setProductColors] = useState<string[]>([]);
  const [products, setProducts] = useState<IProduct[]>(productData);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    categories[0]
  );
  //HANDLERS
  function closeModal() {
    setFormData({
      id: "",
      image: "",
      title: "",
      description: "",
      colors: [],
      price: "",
      category: categories[0],
    });
    setIsOpen(false);
    setProductColors([]);
    setFormErrors({});
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };

      const fieldError = productValidation(newData)[name];

      setFormErrors((prevErrors) => {
        if (!fieldError) {
          const { [name]: _, ...restErrors } = prevErrors;
          return restErrors;
        }
        return { ...prevErrors, [name]: fieldError };
      });

      console.log("Updated Form Data:", newData);
      return newData;
    });
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const errors = productValidation(formData);
    setFormErrors(errors);
    const hasNonEmptyValue = Object.values(errors).some(
      (value) => value !== ""
    );
    if (hasNonEmptyValue) {
      console.log("Validation Errors:", errors);
      return;
    }

    const newProduct: IProduct = {
      ...formData,
      id: uuidv4(), //add a unique ID
      colors: productColors,
      category: selectedCategory,
    };

    setProducts((prev) => [newProduct, ...prev]);
    console.log("Final Form Data Submitted:", newProduct);
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
    setProductColors([]);
    closeModal();
  };
  //render form inputs
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

  //render product colors
  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (productColors.includes(color)) {
          setProductColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setProductColors((prev) => [...prev, color]);
        console.log(products);
      }}
    />
  ));

  return (
    <>
      <Button onClick={openModal}>Add a Product</Button>

      <ProductList products={products} />
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add a new Product">
        <form onSubmit={handleSubmit}>
          {renderFormInputList}
          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
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
                key={uuidv4()}
                style={{
                  display: "inline-block",
                  backgroundColor: color,
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
