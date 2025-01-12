import React from "react";
import productData from "../dataSource";
import "../styles/productList.css";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  colors: string[];
  price: string;
  category: {
    brandName: string;
    brandIcon: string;
  };
  onEdit: () => void;
  onRemove: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  colors,
  price,
  category,
  onEdit,
  onRemove,
}) => {
  const { brandName, brandIcon } = category;
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="colors">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <p className="price">${price}</p>
      <div className="brand">
        <p>Brand: {brandName}</p>
        <img className="brand-icon" src={brandIcon} alt={brandName} />
      </div>
      <button className="edit-button" onClick={onEdit}>
        Edit
      </button>
      <button className="remove-button" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

const ProductList: React.FC = () => {
  const handleEdit = (id: string) => {
    console.log("Editing product with ID:", id);
  };

  const handleRemove = (id: string) => {
    console.log("Removing product with ID:", id);
  };

  return (
    <div className="product-list">
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          colors={product.colors}
          price={product.price}
          category={product.category}
          onEdit={() => handleEdit(product.id)}
          onRemove={() => handleRemove(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
