import React from 'react';
import ImagenYTexto from '../molecules/ImagenYTexto';

const dataBeneficiosLectura = [
 
  {
    id: 1,
    imagen: '/images/brain-removebg-preview.png',
    altText: 'brainlogo',
    titulo:"Aumenta la inteligencia",
    texto:"Además de la destreza lectora, la inteligencia también se evidencia en la forma no verbal como expresión y en el uso del pensamiento abstracto.",
},

{
  id: 2,
  imagen: '/images/coach-removebg-preview.png',
  altText: 'coachlogo',
  titulo:"Desestresa",
  texto:"La lectura reduce el ritmo cardíaco a tal punto que permite a la persona relajarse y descansar mejor, contribuyendo a un modo de vida más saludable."
},

  {
    id: 3,
    imagen: '/images/cube-removebg-preview.png',
    altText: 'cubelogo',
    titulo:"Ejercita la memoria",
    texto:"Leer y escribir son actividades que contribuyen al retraso de la demencia y a complejizar el lenguaje y el pensamiento a lo largo de la vida."
},

  {
    id: 4,
    imagen: '/images/heart-removebg-preview.png',
    altText: 'heartlogo',
    titulo:"Activa la empatía",
    texto:"Ayuda a percibir y comprender las situaciones y estados mentales de las demás personas, favoreciendo las conexiones humanas."
},

{
  id: 5,
  imagen: '/images/magic-removebg-preview.png',
  altText: 'magiclogo',
  titulo:"Estimula la creatividad",
  texto:"Luego de imaginar rostros, lugares y situaciones a partir de letras, es normal que con la lectura constante esta capacidad se estimule cada vez más.",
},
];


const estilosImagen = {
  backgroundColor: "#d8baf0",
  color: "grey",
  height: "50px",
  width: "40px"
};

const estilosh3 = {
  color: "#272727",
  backgroundColor: "#d8baf0",
  fontFamily: "'Raleway', sans-serif",
};

const estilosParrafo = {
  color: "#272727",
  backgroundColor: "#d8baf0",
  fontFamily: "'Mukta', sans-serif",
};

const estilosDivBeneficios = {
  backgroundColor: "#d8baf0"
};

const GrupoDeImagenes = () => {
    return (
      <div style={estilosDivBeneficios} className='div-grupo-imagenes'>
        {dataBeneficiosLectura.map((item, index) => (
          <ImagenYTexto
            key={index}
            imagen={item.imagen}
            titulo={item.titulo}
            texto={item.texto}
            estilosImagen={estilosImagen}
            estilosh3={estilosh3}
            estilosParrafo={estilosParrafo}
          />
        ))}
      </div>
    );
  };
  


export default GrupoDeImagenes;


