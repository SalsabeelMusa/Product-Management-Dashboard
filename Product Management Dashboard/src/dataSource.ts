import { v4 as uuidv4 } from "uuid";
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
  "#F39C12",
  "#E67E22",
  "#BDC3C7",
  "#7F8C8D",
  "#2C3E50",
];

export interface ICategory {
  id: string;
  brandName: string;
  brandIcon: string;
}

export const categories: ICategory[] = [
  {
    id: uuidv4(),
    brandName: "Electronics",
    brandIcon:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: uuidv4(),
    brandName: "Clothing",
    brandIcon:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: uuidv4(),
    brandName: "Home & Kitchen",
    brandIcon:
      "https://images.unsplash.com/photo-1595520232445-86dd52bc0b82?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: uuidv4(),
    brandName: "Sports & Outdoors",
    brandIcon:
      "https://images.unsplash.com/photo-1562771242-711b5aa642a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: uuidv4(),
    brandName: "Books",
    brandIcon:
      "https://images.unsplash.com/photo-1514894780887-121968d00567?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: uuidv4(),
    brandName: "Beauty & Personal Care",
    brandIcon:
      "https://images.unsplash.com/photo-1581752927610-7ba01da0f49d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: uuidv4(),
    brandName: "Toys & Games",
    brandIcon:
      "https://images.unsplash.com/photo-1546554137-f86b9593a222?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: uuidv4(),
    brandName: "Automotive",
    brandIcon:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: uuidv4(),
    brandName: "Health & Wellness",
    brandIcon:
      "https://images.unsplash.com/photo-1576092768833-4b0e14e83cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: uuidv4(),
    brandName: "Furniture",
    brandIcon:
      "https://images.unsplash.com/photo-1585121601708-46c2f02b65b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
];
