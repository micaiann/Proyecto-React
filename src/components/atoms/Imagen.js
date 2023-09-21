
import React from 'react';

const Imagen = ({ imagen, altText}) => {
  return (
    <img src={imagen} alt={altText} className='estilos-img-beneficios'/>
  );
};

export default Imagen;