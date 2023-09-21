
import React from 'react';
import Imagen from '../atoms/Imagen';

const ImagenYTexto = ({ imagen, titulo, texto, estilosImagen, estilosh3, estilosParrafo}) => {
  return (
    <div className='div-contenedor-beneficios'>
      <Imagen imagen={imagen} style={estilosImagen}/>
      <h3 style={estilosh3} className='estilos-h3-responsive'>{titulo}</h3>
      <p style={estilosParrafo} className='estilos-parrafo-responsive'>{texto}</p>
    </div>
  );
};

export default ImagenYTexto;