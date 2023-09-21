import React, { useState, useReducer } from "react";
import { TYPES } from "@/actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "@/reducer/shoppingReducer";
import Product from "../atom/Product";
import Cart from "../molecules/Cart";
import CartIcon from "../atom/CartIcon";

const ShoppingCart = (item) => {
  /*** Uso de useReducer ***/
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  /* Destructurando state */
  const { products, cart } = state;

  /* useState para visiblidad del carrito */
  const [showCart, setShowCart] = useState(false);

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCT, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };
  // const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <>
      <header className="container-global">
        <div className="container-icon" onClick={() => setShowCart(!showCart)}>
          <CartIcon />
          <div class="count-products">
            <span id="count-products-reduce">
              {cart.reduce((acum, item) => acum + item.quantity, 0)}
            </span>
          </div>
        </div>
        <div>
          {showCart ? (
            <Cart cart={cart} deleteFromCart={deleteFromCart} />
          ) : null}
        </div>
      </header>

      <div className="grid-card">
        <h1>Clásicos</h1>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
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
