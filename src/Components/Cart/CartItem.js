import React, { useContext } from 'react';
import ProductsArray from '../Products/ProductsArray';
import "./CartCards.css"
import { ShopContext } from '../../context/shop-context';

const CartItem = (props) => {
    const { cartItems, addToCart, removeFromCart, updateCartItemAmount } = useContext(ShopContext)

  return (
    <div className='cartItem'>
        <img src={props.data.image} />
        <div className='description'>
            <p>{props.data.prod_Name}</p>
            <p>${props.data.price}</p>
            <div className='countHandler'>
                <button onClick={()=>removeFromCart(props.data.ID)}> - </button>
                <input value={cartItems[props.data.ID]} onChange={(e) => updateCartItemAmount(Number(e.target.value), props.data.ID)} />
                <button onClick={()=>addToCart(props.data.ID)}> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem
