
const CartItem = ({ item, deleteFromCart }) => {
  /*Destructurando item */
  const { title, price, id, quantity } = item;

  return (
    <>
      <div className="container-cart-products">
        <div className="cart-product">
          <div className="info-cart-product">
            <span className="count-product-cart">Cant. {quantity}</span>
            <p className="title-product-cart">{title}</p>
            <span className="price-product-cart">$ {price * quantity}</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="icon-close"
            onClick={() => deleteFromCart(id)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          </div>

             </div>
      </div>
    </>
  );
};

export default CartItem;
