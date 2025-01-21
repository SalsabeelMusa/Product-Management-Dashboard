export type IProduct = {
  id: string;
  image: string;
  title: string;
  colors: string[];
  description: string;
  price: string;
  category: {
    brandName: string;
    brandIcon: string;
  };
};

import sportImage from "./assets/sport.png";
import nikeIcon from "./assets/nike.png";
import carImage from "./assets/sport-car.png";
import imageImage from "./assets/image.png";
import clothImage from "./assets/polo-shirt.png";

export const productData: IProduct[] = [
  {
    id: "1",
    image: sportImage,
    title: "Nike Shoes",
    description: "Luxury sports shoes with premium material.",
    colors: ["#ff0000", "#0000ff", "#00ff00", "#000000"],
    price: "350",
    category: {
      brandName: "Nike",
      brandIcon: nikeIcon,
    },
  },
  {
    id: "2",
    image: carImage,
    title: "2022 Genesis GV70",
    description: "Luxury car with high performance and comfort.",
    colors: ["#ff0000", "#ffffff", "#000000"],
    price: "500000",
    category: {
      brandName: "Genesis",
      brandIcon: carImage,
    },
  },
  {
    id: "3",
    image: imageImage,
    title: "Chevrolet Spark",
    description: "Compact car with modern features.",
    colors: ["#0000ff", "#ff0000", "#00ff00", "#000000"],
    price: "120000",
    category: {
      brandName: "Chevrolet",
      brandIcon: imageImage,
    },
  },
  {
    id: "4",
    image: clothImage,
    title: "Casual Men Clothes",
    description: "Stylish and comfortable casual clothes.",
    colors: ["Blue", "black"],
    price: "1500",
    category: {
      brandName: "FashionCo",
      brandIcon: clothImage,
    },
  },
  {
    id: "5",
    image: sportImage,
    title: "Nike Shoes",
    description: "Luxury sports shoes with premium material.",
    colors: ["#ff0000", "#0000ff", "#00ff00", "#000000"],
    price: "350",
    category: {
      brandName: "Nike",
      brandIcon: nikeIcon,
    },
  },
  {
    id: "6",
    image: carImage,
    title: "2022 Genesis GV70",
    description: "Luxury car with high performance and comfort.",
    colors: ["#ff0000", "#ffffff", "#000000"],
    price: "500000",
    category: {
      brandName: "Genesis",
      brandIcon: carImage,
    },
  },
  {
    id: "7",
    image: imageImage,
    title: "Chevrolet Spark",
    description: "Compact car with modern features.",
    colors: ["#0000ff", "#ff0000", "#00ff00", "#000000"],
    price: "120000",
    category: {
      brandName: "Chevrolet",
      brandIcon: imageImage,
    },
  },
  {
    id: "8",
    image: clothImage,
    title: "Casual Men Clothes",
    description: "Stylish and comfortable casual clothes.",
    colors: ["Blue", "black"],
    price: "1500",
    category: {
      brandName: "FashionCo",
      brandIcon: clothImage,
    },
  },
];

export type IformInputList = {
  type: string;
  label: string;
  id: string;
  name: "title" | "description" | "image" | "price"; //so important
};

export const formInputList: IformInputList[] = [
  {
    type: "text",
    label: "Product Title",
    id: "title",
    name: "title",
  },
  {
    type: "text",
    label: "Product Description",
    id: "description",
    name: "description",
  },
  {
    type: "text",
    label: "Product Image URL",
    id: "image",
    name: "image",
  },
  {
    type: "text",
    label: "Product Price",
    id: "price",
    name: "price",
  },
];

export const colors: string[] = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F1C40F",
  "#8E44AD",
  "#E74C3C",
  "#2ECC71",
  "#3498DB",
  "#1ABC9C",
  "#D35400",
  "#A0302B",
  "#16A085",
  "#27AE60",
  "#2980B9",
  "#8E44AD",
  "#F39C12",
  "#E67E22",
  "#BDC3C7",
  "#7F8C8D",
  "#2C3E50",
];
