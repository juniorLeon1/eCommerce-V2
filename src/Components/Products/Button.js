import React from "react";
import { useContext } from "react";
import "./Button.css";
import { ShopContext } from "../../context/shop-context";

export const CartArray = [];

const Button = (props) => {

  const { addToCart, cartItems } = useContext(ShopContext)

  const cartItemAmount = cartItems[props.buttonVal]

  return (
    <div>
      <button className="button" onClick={() => addToCart(props.buttonVal)}>
        Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
      </button>
    </div>
  );
};

export default Button;
