
import React from "react";
import Image from "next/image";

function Card({imageSource, title, precio}) {
  return (
    <div>
      <div className="card">
        <Image src={imageSource} alt="img" width={130} height={200} className="img" />
        <h1>{title}</h1>
        <h2>{precio}</h2>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export default Card;