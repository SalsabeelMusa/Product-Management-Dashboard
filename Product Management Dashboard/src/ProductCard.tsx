import React from "react";

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

export const ProductCard: React.FC<ProductCardProps> = ({
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
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "250px",
        padding: "16px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <div style={{ display: "flex", gap: "4px" }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: color,
              border: "1px solid #ccc",
            }}
          ></div>
        ))}
      </div>
      <p>
        <strong>${price}</strong>
      </p>
      <div>
        <p>Brand: {brandName}</p>
        <img
          src={brandIcon}
          alt={brandName}
          style={{ width: "30px", height: "30px" }}
        />
      </div>
      <button
        onClick={onEdit}
        style={{
          marginRight: "8px",
          marginTop: "16px",
          padding: "8px 16px",
          backgroundColor: "#6c63ff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Edit
      </button>
      <button
        onClick={onRemove}
        style={{
          padding: "8px 16px",
          backgroundColor: "#ff4d4d",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
    </div>
  );
};
