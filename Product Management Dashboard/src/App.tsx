import React from "react";
import ProductList from "./ProductList"; // Import ProductList

const App: React.FC = () => {
  return (
    <div>
      <input type="button" value={"Add a Product"} />
      <ProductList /> {/* This will display all the products */}
    </div>
  );
};

export default App;
