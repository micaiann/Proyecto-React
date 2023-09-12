import React from "react";
import { TYPES } from "@/actions/shoppingActions";
import { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "@/reducer/shoppingReducer";
import Product from "../atom/Product";
import CartItem from "../atom/CartItem";

/* ShoppingCarts.js contiene al anterior Cards.js */

/*** Uso de useReducer ***/
const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  /* Destructurando state */
  const { products, cart } = state;

  const addToCart = (id) => 
  {
    console.log (id)
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  }


  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCT, payload: id });
    } else {
        dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART})


  return (
    <>
    <h3>Carrito</h3>
      <div className="box">
        {cart.map((item, i) => (
          <CartItem key={i} item={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <button onClick={clearCart}>Limpiar carrito</button>
    <div className="grid-card">
      <h1>Clásicos</h1>
         {products.map((product) => (
          <Product
            key={product.id}
            id= {product.id}
            imageSource={product.imageSource}
            title={product.title}
            price={product.price}
           addToCart={addToCart}
          />
        ))}
    </div>
      
      </>
  );
};

export default ShoppingCart;
