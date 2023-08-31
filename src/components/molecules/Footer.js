import Form from "../atoms/footer/Form"


const Footer = () => {
  return (
    <>
        <footer style={pieContenedor}>

            <div style={pieContenidoArriba}>

              <div style={pieFilas}>
                <img src="\images\Libros-Logo.png" alt="logo-libros" width="150px"></img>
              </div>

              <div style={pieFilas}>
                <h4>Sobre Nosotros</h4>
                <p>Ayuda</p>
                <p>Servicio al cliente</p>
                <p>Detalles envíos</p>
                <p>Politica de privacidad</p>
              </div>

              <div style={pieFilas}>
                <h4>Usuario</h4>
                <Form />
              </div>

              <div style={pieFilas}>
                <h4>Nuestras redes</h4>
                <div style={redesSociales}>
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

            <div style={pieContenedorAbajo}>

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

const pieContenidoArriba = {
   display :"flex",
   justifyContent: "space-around",
   alignItems: "flex-start",
   flexDirection: "row",
   width: "100%",
   textAlign : "center",
   marginBottom : "2rem",
}


const pieFilas = {
  width : "200px",
  margin: "1rem",
  display: "flex",
  justifyContent:"flex-start",
  flexDirection: "column",
  color: "black",
  alignItems: "center"
}

const redesSociales = {
  display: "flex",
  flexDirection: "column",
  padding:"1rem"
}

const pieContenedorAbajo = {
  display :"flex",
  justifyContent: "space-around",
  marginBottom : "2rem",

}

const copyright = {
  fontSize: "15px",
  lineHeight: "15px",
  color: "black",
  fontWeight: "600",
}


