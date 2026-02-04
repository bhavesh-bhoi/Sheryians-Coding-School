import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.style} bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded cursor-pointer transition-transform duration-200 hover:scale-95`}
    >
      {props.text}
    </button>
  );
};

export default Button;
