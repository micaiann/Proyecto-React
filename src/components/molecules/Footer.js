import { Content } from "next/font/google"
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
              <div className="pie-filas-nosotros">
                <p>Ayuda</p>
                <p>Servicio al cliente</p>
                <p>Detalles envíos</p>
                <p>Politica de privacidad</p>
              </div>
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
              height :"3px",
              background :"black",
              marginLeft:"4rem",
              marginRight: "4rem"
              }}></hr>

            <div style={pieContenidoAbajo} className="pie-contenido-abajo">

              <div style={copyright}>
               <p>@Copyright{new Date().getFullYear()}, All Rights Reserved by ClarityUI.</p>
              </div>

            </div>
        </footer>

        <style jsx>{`

          // MEDIAQUERY

          // MOBILE

          @media (min-width: 360px) {
            .pie-contenido-arriba {
              display: flex;
              flex-direction: column;
              text-align: center;
            }
          
            .pie-filas {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .pie-filas-nosotros {
              display: flex;
              flex-direction: column;
              padding: 1rem;
              row-gap: 35px;
              
            }
          
            .redes-sociales {
              display: flex;
              flex-direction: row;
              align-items: center;
            }
          
            .pie-contenido-abajo{
              display: flex;
              justify-content: space-around;
            }
          }

          // TABLETS

          @media (min-width: 768px) {
            .pie-contenido-arriba {
              flex-direction: row;
              margin-bottom: 2rem;
              justify-content: space-around;
            }

          
            .pie-filas {
              width: 200px;
            } 
          
            .pie-contenido-abajo {
              margin-bottom: 2rem;
            } 
          } 

          // PC

          @media (min-width: 1024px) {

            .pie-contenido-arriba { 
              align-items: flex-start;
            } 
          }  

        `}
        </style>


    </>
  )
}

export default Footer

const pieContenedor = {
  backgroundColor : "white",
  border: "2px solid black",
  borderRadius: "10px",
  fontFamily:"'Mukta', sans-serif",
  marginLeft:"0.1rem",
  marginRight: "0.1rem",
  marginBottom:"0.2rem"
}

const pieFilas = {
  margin: "1rem",
  color: "black",
  paddingTop: "1rem"
}

const redesSociales = {
  padding:"2rem",
}

const pieContenidoAbajo = {
  marginBottom : "2rem",

}

const copyright = {
  fontSize: "15px",
  lineHeight: "15px",
  color: "black",
  fontWeight: "600",
  marginTop: "1rem"
}




