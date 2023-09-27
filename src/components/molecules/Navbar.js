import React from "react";
import { useState, useContext } from "react";
import CartIcon from "../atoms/clásicos/CartIcon";
import Cart from "./Cart";
import { BooksContext } from "@/context/BooksContextProvider";
import { TYPES } from "@/actions/shoppingActions";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showCart, setShowCart] = useState(false);

  //Paso 4 - Habilitar uso props (ejecutar useContext)
  const data = useContext(BooksContext);
  // Destructurando data 
  const [state, dispatch] = data;
  // Destructurando state
  const {cart} = state;

  const deleteFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
  };
  // const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <>
      <nav className="nav">
        <div
          className={`nav_toggle ${isOpen && "open"} `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <a href="#" className="logo">
          {" "}
          <img src="./images/logo-proyecto.png" />
        </a>

        <ul className={`nav_menu  ${isOpen && "open"}`}>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Inicio
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Libros
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Nosotros
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Contacto
            </a>
          </li>
          <li className="nav_item">
            <div
              className="container-icon"
              onClick={() => setShowCart(!showCart)}
            >
              <CartIcon />
              <div class="count-products">
                <span id="count-products-reduce">
                  {cart.reduce((acum, item) => acum + item.quantity, 0)}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div>
        {showCart ? <Cart cart={cart} deleteFromCart={deleteFromCart} /> : null}
      </div>
    </>
  );
};

export default Navbar;
