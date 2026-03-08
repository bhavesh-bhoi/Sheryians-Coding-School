import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [ProductData, setProductData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProductData(response.data);
  };

  // const getRandomData = async (id) => {
  //   const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  //   console.log(response.data);
  // };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="allProducts">
      {/* <button onClick={getData}>GET All Products</button> */}

      {ProductData.map((product) => {
        return (
          <div key={product.id} className="productCard">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} width="100" />
          </div>
        );
      })}
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
  );
}

export default App;
