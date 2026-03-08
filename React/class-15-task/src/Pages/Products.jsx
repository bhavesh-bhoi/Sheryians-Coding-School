import { useContext } from "react";
import { ProductDataContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const { ProductData } = useContext(ProductDataContext);

  // Variable to hold the rendered product cards
  let renderData = <h1 className="loading">Loading All Products...</h1>;

  // Rendering the Product Data as a list of product cards with links to their details page
  if (ProductData.length > 0) {
    renderData = ProductData.map((product, index) => {
      return (
        <Link
          to={`/products/${product.id}`}
          key={index}
          className="productCard"
        >
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} width="100" />
        </Link>
      );
    });
  }

  return (
    <>
      <h1 style={{ color: "#4f46e5", fontSize: "40px", fontWeight: "bold" }}>All Products</h1>
      <div className="allProducts">
        {/* <button onClick={getData}>GET All Products</button> */}

        {renderData}
        {/* Get Random Product */}
        {/* <button
        onClick={() => {
          const randomId = Math.floor(Math.random() * 20 + 1);
          getRandomData(randomId);
        }}
      >
        GET Random Product
      </button> */}
      </div>
    </>
  );
};

export default Products;
