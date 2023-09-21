import React from "react";
import CartProduct from "../atom/CartProduct";

const Cart = ({ cart, deleteFromCart }) => {
  return (
    <div className="cart-container">
      {cart.map((item, i) => (
        <CartProduct key={i} item={item} deleteFromCart={deleteFromCart}/>
      ))}
      <div className="cart-total">
        <h3>Total:</h3>
        <span className="total-to-pay">
          ${cart.reduce((acum, item) => acum + item.price * item.quantity, 0)}
        </span>
      </div>
    </div>
  );
};

export default Cart;
