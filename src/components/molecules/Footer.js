import Form from "../atoms/footer/Form"


const Footer = () => {
  return (
    <>
        <footer style={pieContenedor}>

            <div className="pie-contenido-arriba">

              <div style={pieFilas} className="pie-filas">
                <img src="\images\Libros-Logo.png" alt="logo-libros" width="150px"></img>
              </div>

              <div style={pieFilas} className="pie-filas" >
                <h4>Sobre Nosotros</h4>
                <p>Ayuda</p>
                <p>Servicio al cliente</p>
                <p>Detalles envíos</p>
                <p>Politica de privacidad</p>
              </div>

              <div style={pieFilas} className="pie-filas">
                <h4>Usuario</h4>
                <Form />
              </div>

              <div style={pieFilas} className="pie-filas">
                <h4>Nuestras redes</h4>
                <div style={redesSociales} className="redes-sociales">
                  <a href="" target="_blank">
                    <img src="\images\twitter-logo.png" alt="logo-twitter" width="50px"></img>
                  </a>
                  <a href="" target="_blank">
                    <img src="\images\instagram-logo.png" alt="logo-instagram" width="50px"></img>
                  </a>
                  <a href="" target="_blank" >
                    <img src="\images\facebook- logo.png" alt="logo-facebook" width="50px"></img>
                  </a>
                </div>
              </div>

            </div>
       

             <hr style={{
               width: "90%",
               height :"2px",
               background :"black"
              }}></hr>

            <div style={pieContenidoAbajo} className="pie-contenido-abajo">

              <div style={copyright}>
               <p>@Copyright{new Date().getFullYear()}, All Rights Reserved by ClarityUI.</p>
              </div>

            </div>

         
        </footer>
    </>
  )
}

export default Footer

const pieContenedor = {
  backgroundColor : "white",
  border: "2px solid black",
  borderRadius: "10px",
  fontFamily:"'Mukta', sans-serif"
}

const pieFilas = {
  margin: "1rem",
  color: "black",
}

const redesSociales = {
  padding:"1rem",
}

const pieContenidoAbajo = {
  marginBottom : "1.5rem",

}

const copyright = {
  fontSize: "15px",
  lineHeight: "15px",
  color: "black",
  fontWeight: "600",
}