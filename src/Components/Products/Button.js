import React from "react";
import { useState } from "react";
import "./Button.css";

export const CartArray = [];

const Button = (props) => {
//   const [added, setAdded] = useState([]);
  const handleButton = () => {
    CartArray.push(props.buttonVal);
    console.log(CartArray)
  };

  return (
    <div>
      <button className="button" onClick={handleButton}>
        Add to Cart
      </button>
    </div>
  );
};

export default Button;
