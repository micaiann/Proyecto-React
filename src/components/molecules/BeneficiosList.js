

import React from 'react'
import Beneficios from '../atoms/Beneficios'

const beneficiosItems = [
    {   
        id: 1,
        icono: "",
        titulo:"Aumenta la inteligencia",
        texto:"Además de la destreza lectora, la inteligencia también se evidencia en la forma no verbal como expresión y en el uso del pensamiento abstracto.",
    },

    {   
        id:2,
        icono:"",
        titulo:"Estimula la creatividad",
        texto:"Luego de imaginar rostros, lugares y situacioens a partir de letras, es normal que con la lectura constante esta capacidad se estimule cada vez más.",
    },

    {   
        id:3,
        icono:"",
        titulo:"Ejercita la memoria",
        texto:"Leer, escribir y jugar son actividades que contribuyen al retraso de la demencia"
    },

    {   
        id:4,
        icono:"",
        titulo:"Activa la empatía",
        texto:"Ayuda a percibir y comprender las situaciones y estados mentales de las demás personas."
    },

    {   
        id:5,
        icono:"",
        titulo:"Desestresa",
        texto:"La lectura reduce el ritmo cardíaco a tal punto que permite a la persona relajarse y descansar mejor."
    }
]



const BeneficiosList = () => {
    const divBeneficiosLectura = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        textAling: "left"
    }

    return (
        <div style={divBeneficiosLectura}>
            {
             beneficiosItems.map(item => <Beneficios key={item.id} data={item} />)
            }
        </div>
    )
}

export default BeneficiosList