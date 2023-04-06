import React, { useContext } from "react";
import ProductsArray from "../Products/ProductsArray";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

import "./CartCards.css";

const CartCards = () => {
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
            return (
              <div>
                <CartItem data={product} />
              </div>
            );
          } else {
            return null
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <h2>Subtotal: ${totalAmount}</h2>
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
