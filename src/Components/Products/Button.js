import React from "react";
import { useContext } from "react";
import "./Button.css";
import { ShopContext } from "../../context/shop-context";

export const CartArray = [];

const Button = (props) => {

  const { addToCart } = useContext(ShopContext)

  return (
    <div>
      <button className="button" onClick={() => addToCart(props.buttonVal)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Button;
