import { useNavigate } from "react-router-dom";

const Home = () => {
  // For Navigating from one page to another we use useNavigate hook from react-router-dom
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ color: "#4f46e5", fontSize: "90px", fontWeight: "bold" }}>This is Products HomePage</h1>
      <button
        onClick={() => {
          navigate("/products");
        }}
      >
        Explore Products
      </button>
    </div>
  );
};

export default Home;
