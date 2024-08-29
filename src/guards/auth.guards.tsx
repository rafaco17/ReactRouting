import { useSelector } from "react-redux"
import { AppStore } from "../redux/store"
import { Navigate, Outlet } from "react-router-dom"
import { PublicRoutes } from "../models"

export const AuthGuard = () => {
    const userState = useSelector( (store: AppStore) => store.user);
    console.log(userState)
    return userState.name ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN}/>;   // en este apartado deberiamos validar el usuario que se encuentra en nuestra store
    // lo que nos dice ese if es: si existe un nombre vamos a mantenernos en la ruta q queremos acceder, caso contrario lo redirijimos a otra q en este caso es el login
}


export default AuthGuard;