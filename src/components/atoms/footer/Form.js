

const Form = () => {
  return (
    <>
    <form id="form">
      <div>

        <div className="input-footer">
          <input type="text" name="" id="name" required className="input-clase"></input><span className="linea"></span>
          <label className="label-footer" >Nombre y apellido</label>
        </div>

        <div className="input-footer">
          <input type="email" name="" id="email" required className="input-clase"></input><span className="linea"></span>
          <label className="label-footer">Email</label>
        </div>

        <div className="input-footer">
          <input type="password" name="" id="password" required className="input-clase"></input><span className="linea"></span>
          <label className="label-footer">Contraseña</label>
        </div>

        <button type="submit" className="boton-pie">Suscríbete</button>

      </div>

    </form>

    
    </>
  )
}





export default Form