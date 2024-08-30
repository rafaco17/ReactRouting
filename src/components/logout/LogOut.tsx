import { useDispatch } from "react-redux"
import { resetUser } from "../../redux/states/user"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models"
import { useEffect, useState } from "react"
import { sharingInformationState } from "../../services/sharingInformationState"

function LogOut() {
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    
    const logOut = () => {
        dispatcher(resetUser(undefined))    
        navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
    }

    const [ disguise, setDisguise ] = useState(false)

    useEffect(() => {
      const subscription$ = sharingInformationState.getSubject().subscribe(data => {
        console.log("Esta es mi data: ",data)
        setDisguise(data)
      })

      return () => {
        subscription$.unsubscribe()
      }
    }, [])

  return (
    <div>
        <button onClick={logOut} hidden={disguise}>Log Out</button>
    </div>
  )
}
export default LogOut