import React, { createContext } from "react";

export const ThemeContextData = createContext();

const ThemeContext = (props) => {
  const data = "Bhavesh";

  return (
    <div>
      <ThemeContextData.Provider value={data}>
        <h1>{props.children}</h1>
      </ThemeContextData.Provider>
    </div>
  );
};

export default ThemeContext;
