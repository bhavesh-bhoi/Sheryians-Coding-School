import { createContext, useEffect, useState } from "react";
import { getAllProductsData } from "../API/productApi";
// Creating a Context for Product Data
export const ProductDataContext = createContext();

const ProductContext = (props) => {
  // State to hold the Product Data
  const [ProductData, setProductData] = useState([]);

  const setData = async () => {   
    setProductData(await getAllProductsData());
  };

  // const getRandomData = async (id) => {
  //   const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  //   console.log(response.data);
  // };

  //   Side Effect to fetch the data when the component mounts
  useEffect(() => {
    setData();
  }, []);
  return (
    // Providing the ProductData to the children components using Context API
    <ProductDataContext.Provider value={{ ProductData }}>
      {props.children}
    </ProductDataContext.Provider>
  );
};

export default ProductContext;
