

import React from 'react'

const Beneficios = ({data}) => {

    const {icono, titulo, texto} = data;

    
    const estilosIconoBeneficios = {
        height: "60px",
        width: "60px"
    }

    const estilosh3Beneficios = {
        color: "#272727",
        backgroundColor: "#d8baf0",
        fontSize: "0.7rem",
        marginTop: "4rem",
        fontFamily: "'Mukta', sans-serif",
        textAlign: "center"
    }

    const estilosParrafoBeneficios = {
        color: "#272727",
        fontSize: "0.6rem",
        fontFamily: "'Mukta', sans-serif",
        marginTop: "0.2rem",
        padding: "1rem",
        textAlign: "center"

    }

  return (
    <div>
            <a style= {estilosIconoBeneficios}>{icono}</a>
            <h3 style={estilosh3Beneficios}>{titulo}</h3>
            <p style={estilosParrafoBeneficios}>{texto}</p>
    </div>
  )
}

export default Beneficios