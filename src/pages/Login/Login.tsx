import { useDispatch } from "react-redux";
import { getGoku } from "../../services"
import { createUser, resetUser } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, Role } from "../../models";
import { useEffect } from "react";

function Login() {
  const dispatcher = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatcher(resetUser(undefined))   
  }, [])

  const login = async () => {
    try {
      const result = await getGoku();
      // dispatcher(createUser({...result, rol:Role.USER}))  este lo utilizamos momentamente para ver si funciona lo del routing con roles 
      dispatcher(createUser(result)) // todavia falta un control a los datos que vienen rompen el esquema del user.mode.ts
      navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true}) // es necesario colocar la barrita para que funcione correctamente el replace, ahora si no usamos replace lo que pasa esque a la url que nos encontremos le añadiremos la ruta q enviemos ejemplo: nos encontramos /a/b y le mandamos c pasaremos a estar en /a/b/c pero si usamos replace remplazaremos la ultima url, siendo /c, lo remplaza todo
    } catch (error) {console.log(error)}
  }

  return (
    <div>
      <h1>
        Este es el LOGIN
      </h1>
      <button onClick={login}>
        LOGIN
      </button>
    </div>
  )
}

export default Login