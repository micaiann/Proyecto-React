import React from 'react'
import BeneficiosList from '../molecules/BeneficiosList'
const BeneficiosSection = () => {

    const estilosBeneficiosSection = {
        height: "850px", // A MODIFICAR
        width: "100%",
        backgroundColor: "#d8baf0"
    }

  return (
    <section style={estilosBeneficiosSection}><BeneficiosList></BeneficiosList></section>
  )
}

export default BeneficiosSection