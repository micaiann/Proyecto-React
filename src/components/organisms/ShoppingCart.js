import React, { useContext } from "react";
import { TYPES } from "@/actions/shoppingActions";
import Product from "../atoms/clásicos/Product";
import { BooksContext } from "@/context/BooksContextProvider";

const ShoppingCart = (item) => {
  //Paso 4 - Habilitar uso props (ejecutar useContext)
  const data = useContext(BooksContext);
  // Destructurando data
  const [state, dispatch] = data;
  // Destructurando state
  const { products } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  return (
    <>
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
