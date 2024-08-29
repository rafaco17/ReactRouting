import { Route, Navigate } from "react-router-dom"
import { PrivateRoutes } from "../../models"
import { Home } from "./Home"
import { Dashboard } from "./DashBoard"
import RoutesWithNotFound from "../../utilities/routesWithNotFound"

function Private() {
  return (
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path={PrivateRoutes.HOME} element={<Home />} />
      </RoutesWithNotFound>
  )
}
export default Private