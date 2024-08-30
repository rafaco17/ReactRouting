import { Route, Routes } from "react-router-dom"
import { NotFound } from "../components/notfount"

interface Props {
    children: React.ReactNode
}

function RoutesWithNotFound( {children}: Props ) {      // con este componente nos ahorramos tener q escribir en cada lado el not found por un url q no existe
  return (
    <Routes>
        {children}
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}
export default RoutesWithNotFound