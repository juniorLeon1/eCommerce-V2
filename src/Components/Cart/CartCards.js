import React, { useContext } from "react";
import ProductsArray from "../Products/ProductsArray";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

import "./CartCards.css";

const CartCards = (props) => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {ProductsArray.map((product) => {
          if (cartItems[product.ID] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
          <button>Checkout</button>
        </div>
      ) : (
        <h1 className="emptyCart">Your Cart is Empty!</h1>
      )}
    </div>
  );
};

export default CartCards;
