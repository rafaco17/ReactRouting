import { useDispatch } from "react-redux"
import { resetUser } from "../../redux/states/user"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models"

function LogOut() {
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    
    const logOut = () => {
        dispatcher(resetUser(undefined))    
        navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
    }

  return (
    <div>
        <button onClick={logOut}>Log Out</button>
    </div>
  )
}
export default LogOut