import axios from "axios";

// Function to fetch all products data from the API
export const getAllProductsData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};
