import React from "react";
import { useContext } from "react";
import { ProductDataContext } from "../Context/ProductContext";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { ProductData } = useContext(ProductDataContext);

  // Getting the ID from the URL using useParams hook
  const { id } = useParams();

  // Finding the product with the matching ID from the ProductData
  const selectedProduct = ProductData.find((product) => id == product.id);

  return (
    <div>
      <h1 style={{ color: "#4f46e5", fontSize: "60px", fontWeight: "bold" }}>Product Details Page</h1>
      {/* Display the details of the selected product */}
      <h2>{selectedProduct ? <div className="productDetails">
        <h3>{selectedProduct.title}</h3>
        <p>{selectedProduct.description}</p>
        <img src={selectedProduct.image} alt={selectedProduct.title} />
      </div> : "Product not found"}</h2>
    </div>
  );
}

export default ProductDetails;
