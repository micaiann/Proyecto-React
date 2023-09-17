import { useState, useEffect } from "react"
import FormUser from "./FormUser"


const Form = () => {

   const [visible, setVisible] = useState(false)

   const handleVisible = () => { 
      setVisible (!visible)
   }

   useEffect(() => {

      if (visible) {
        setTimeout(() => {
          setVisible(false)
        }, 4000);
      }

   }, [visible]) 

   const handleSubmit = (e) => {
      e.preventDefault()
      handleVisible()

      fetch("https://formsubmit.co/ajax/nahuel.pasayo@hotmail.com", {
        method:"POST",
        body: new FormData(e.target),
      })
   }


  return (
    <>
    <form className="formulario" onSubmit={handleSubmit} >
      <div>

        <div className="input-pie-pagina">
          <input type="text" name="Nombre" id="name" required className="input-clase"></input><span className="linea"></span>
          <label className="label-pie-pagina" >Nombre y apellido</label>
        </div>

        <div className="input-pie-pagina">
          <input type="email" name="Email" id="email" required className="input-clase"></input><span className="linea"></span>
          <label className="label-pie-pagina">Email</label>
        </div>

        <div className="input-pie-pagina">
          <input type="password" name="Contraseña" id="password" required className="input-clase"></input><span className="linea"></span>
          <label className="label-pie-pagina">Contraseña</label>
        </div>
        
        <button type="submit" className="boton-pie-pagina" >Suscríbete</button>

        {/** MODAL **/}

        {
            visible 
            ? (<FormUser />)
            : null
        }

      </div>

    </form>

    </>
  )
}



export default Form
