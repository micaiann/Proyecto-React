
const Form = () => {
  return (
    <>
    <form className="formulario">
     <input type="text" required className="input-email"></input>
        <label className="lbl-nombre">
            <span className="lbl-texto">
              Ingrese su correo electronico
            </span>
        </label>
    </form>

    <br></br>
    <br></br>

    <button type="submit" className="boton-pie">Suscribite</button>
    </>
  )
}





export default Form