import React from "react";
import Card from "../atom/Card";


const cards = [
  {
    id: 1,
    imageSource: "/images/marcosAurelio.jpg",
    title: "Meditaciones",
    precio: "$3.000",
  },
  {
    id: 2,
    imageSource: "/images/filonDeAlejandria.jpg",
    title: "Todo hombre bueno es libre",
    precio: "$4.720",
  },
  {
    id: 3,
    imageSource: "/images/seneca.jpg",
    title: "Cartas de un estoico",
    precio: "$3.350",
  },
  {
    id: 4,
    imageSource: "/images/epicteto.jpg",
    title: "Equiridion",
    precio: "$3.800",
  },
];

function Cards() {
  return (
    <div className="grid-card">
      <h1>Clásicos</h1>
      {cards.map((card) => (
        <Card
          imageSource={card.imageSource}
          title={card.title}
          precio={card.precio}
        />
      ))}
    </div>
  );
}

export default Cards;
