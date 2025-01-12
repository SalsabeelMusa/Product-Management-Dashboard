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
        width: "200px", // Reduced width
        padding: "12px", // Reduced padding
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        fontSize: "14px", // Smaller font size
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "12px", // Reduced margin
        }}
      />
      <h4 style={{ fontSize: "16px" }}>{title}</h4> {/* Smaller title font */}
      <p>{description}</p>
      <div style={{ display: "flex", gap: "3px" }}>
        {" "}
        {/* Reduced gap */}
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: "18px", // Smaller circle
              height: "18px",
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
        <p style={{ fontSize: "12px" }}>Brand: {brandName}</p>{" "}
        {/* Smaller brand text */}
        <img
          src={brandIcon}
          alt={brandName}
          style={{
            width: "24px", // Smaller icon
            height: "24px",
            marginTop: "4px", // Reduced margin
          }}
        />
      </div>
      <button
        onClick={onEdit}
        style={{
          marginRight: "6px", // Reduced margin
          marginTop: "12px", // Reduced margin
          padding: "6px 12px", // Smaller padding
          backgroundColor: "#6c63ff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "12px", // Smaller text
        }}
      >
        Edit
      </button>
      <button
        onClick={onRemove}
        style={{
          padding: "6px 12px", // Smaller padding
          backgroundColor: "#ff4d4d",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "12px", // Smaller text
        }}
      >
        Remove
      </button>
    </div>
  );
};
