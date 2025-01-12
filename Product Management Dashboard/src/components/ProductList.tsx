import React from "react";
import productData, { Product } from "../dataSource"; // Import the product data from datasource.ts
import { ProductCard } from "./ProductCard";

// This is the component that will render all products
const ProductList: React.FC = () => {
  // Handling actions like editing or removing products
  const handleEdit = (id: string) => {
    console.log("Editing product with ID:", id);
  };

  const handleRemove = (id: string) => {
    console.log("Removing product with ID:", id);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
      {/* Loop through the product data and render a ProductCard for each product */}
      {productData.map((product: Product) => (
        <ProductCard
          key={product.id} // Unique key for each product
          image={product.image} // Product image
          title={product.title} // Product title
          description={product.description} // Product description
          colors={product.colors} // Available colors for the product
          price={product.price} // Product price
          category={product.category} // Category info (brandName and brandIcon)
          onEdit={() => handleEdit(product.id)} // Edit action for the product
          onRemove={() => handleRemove(product.id)} // Remove action for the product
        />
      ))}
    </div>
  );
};

export default ProductList;
