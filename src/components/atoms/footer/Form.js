

const Form = () => {
  return (
    <>
    <form action="https://formsubmit.co/nahuel.pasayo@hotmail.com" method="POST"  className="formulario">
      <div>

        <div className="input-pie-pagina">
          <input type="text" name="" id="name" required className="input-clase"></input><span className="linea"></span>
          <label className="label-pie-pagina" >Nombre y apellido</label>
        </div>

        <div className="input-pie-pagina">
          <input type="email" name="" id="email" required className="input-clase"></input><span className="linea"></span>
          <label className="label-pie-pagina">Email</label>
        </div>

        <div className="input-pie-pagina">
          <input type="password" name="" id="password" required className="input-clase"></input><span className="linea"></span>
          <label className="label-pie-pagina">Contraseña</label>
        </div>

        <button type="submit" className="boton-pie-pagina">Suscríbete</button>

        <article id="suscripcion" className="usuario">
          <div className="usuario-contenido">
            <article className="caja-contenido">
              <h3>Te has suscripto satisfactoriamente</h3>
              <img src="\images\check2.gif" alt="verificacion" width="100"></img>
            </article>
          </div>
        </article>

      </div>

    </form>
    </>
  )
}



export default Form