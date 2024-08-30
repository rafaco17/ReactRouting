import { useSelector } from "react-redux"
import { AppStore } from "../redux/store";
import { PrivateRoutes, Role } from "../models";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
    rol : Role
}

const AuthRoles = ( { rol } : Props) => {
    const userState = useSelector( (store: AppStore) => store.user);
    return rol === userState.rol ? <Outlet /> : <Navigate to={PrivateRoutes.PRIVATE} />
}
export default AuthRoles