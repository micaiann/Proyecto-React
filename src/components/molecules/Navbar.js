import React from 'react';
import { useState } from 'react';


const Navbar = ({ allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal, }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState(false)

  const onDeleteProduct = product => {
    const results = allProducts.filter(
      item => item.id !== product.id
    );

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };



  return (
    <nav className="nav" >
      <div className={`nav_toggle ${isOpen && "open"} `} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>


      <a href='#' className='logo'> <img src='./images/logo-proyecto.png' /></a>


      <ul className={`nav_menu  ${isOpen && "open"}`}>
        <li className='nav_item'>
          <a href='#' className='nav_link'>Inicio</a>
        </li>
        <li className='nav_item'>
          <a href='#' className='nav_link'>Libros</a>
        </li>
        <li className='nav_item'>
          <a href='#' className='nav_link'>Nosotros</a>
        </li>
        <li className='nav_item'>
          <a href='#' className='nav_link'>Contacto</a>
        </li>
      </ul>
      <div className='cart-icon' onClick={() => setActive(!active)}>
        <a href='#' className='cart'><img src='./images/cart_1.png' /></a>

        <div className="count-products">
          <span id='contador-productos'>{countProducts}</span>

        </div>
      </div>
      <div className={`container-cart-products ${active ? '' : 'hidden-cart'
        }`} >
        {allProducts.length ? (
          <>
            <div className='row-product'>
              {allProducts.map(product => (
                <div className='cart-product' key={product.id}>
                  <div className='info-cart-product'>
                    <span className='cantidad-producto-carrito'>
                      {product.quantity}
                    </span>
                    <p className='titulo-producto-carrito'>
                      {product.nameProduct}
                    </p>
                    <span className='precio-producto-carrito'>
                      ${product.price}
                    </span>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    width="24px"
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='icon-close'
                    onClick={() => onDeleteProduct(product)}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </div>
              ))}
            </div>

            <div className='cart-total'>
              <h3>Total:</h3>
              <span className='total-pagar'>${total}</span>
            </div>

            <button className='btn-clear-all' onClick={onCleanCart}>
              Vaciar Carrito
            </button>
          </>
        ) : (
          <p className='cart-empty'>El carrito está vacío</p>
        )}
      </div>


    </nav>
  )
}

export default Navbar