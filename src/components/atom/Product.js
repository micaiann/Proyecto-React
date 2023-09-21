import React from "react";
import Image from "next/image";

const Product = ({ imageSource, title, price, id, addToCart }) => {

  
  return (
    <div className="card">
      <Image
        className="img"
        src={imageSource}
        alt="img"
        width={130}
        height={200}
      />
      <h1>{title}</h1>
      <h2>${price}</h2>
      <button onClick={() => addToCart(id)}>Añadir</button>
    </div>
  );
}

export default Product;
