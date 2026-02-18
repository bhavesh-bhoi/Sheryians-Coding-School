import { useContext } from "react";
import { ThemeContextData } from "../Context/ThemeContext";

const Navbar = () => {
  const data = useContext(ThemeContextData);
  return (
    <div className="nav">
      <h1>Navbar Here - {data}</h1>
    </div>
  );
};

export default Navbar;
