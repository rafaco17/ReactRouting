import { useDispatch } from "react-redux";
import { getGoku } from "../../services"
import { createUser } from "../../redux/states/user";

function Login() {
  const dispatcher = useDispatch()
  const login = async () => {
    try {
      const result = await getGoku();
      dispatcher(createUser(result))    // todavia falta un control a los datos que vienen rompen el esquema del user.mode.ts
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