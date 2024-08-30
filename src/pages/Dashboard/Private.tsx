import { Route, Navigate } from "react-router-dom"
import { PrivateRoutes } from "../../models"
import RoutesWithNotFound from "../../utilities/routesWithNotFound"
import { lazy } from "react"
import { LogOut } from "../../components/logout"

const Dashboard = lazy(() => import("./DashBoard/Dashboard"))
const Home = lazy(() => import("./Home/Home"))

function Private() {
  return (
    <div>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path={PrivateRoutes.HOME} element={<Home />} />
      </RoutesWithNotFound>
      <LogOut />    {/* SI COLOCAMOS EL LogOut dentro de Routes o un elemento route saldra error peor podemos manejarlo de esta forma, podrias mejorarlo */}
    </div>
  )
}
export default Private