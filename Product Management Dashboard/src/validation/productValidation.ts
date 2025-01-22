interface ValidationErrors {
  title: string;
  description: string;
  image: string;
  price: string;
}
export const productValidation = (product: {
  title: string;
  description: string;
  image: string;
  price: string;
}): ValidationErrors => {
  const errors: ValidationErrors = {
    title: "",
    description: "",
    image: "",
    price: "",
  };

  if (!product.title.trim()) {
    errors.title = "Title is required.";
  } else if (product.title.length < 3) {
    errors.title = "Title must be at least 3 characters long.";
  }

  if (!product.description.trim()) {
    errors.description = "Description is required.";
  } else if (product.description.length < 10) {
    errors.description = "Description must be at least 10 characters long.";
  }
  if (!product.image.trim()) {
    errors.image = "Image URL is required.";
  } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/.test(product.image)) {
    errors.image =
      "Invalid image URL. Must be a valid image format (jpg, png, etc.).";
  }

  if (!product.price.trim()) errors.price = "Price is required.";
  else if (isNaN(Number(product.price)))
    errors.price = "Price must be a number.";
  return errors;
};
