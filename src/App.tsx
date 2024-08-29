import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Provider } from 'react-redux'
import riemStore from './redux/store'
import { PrivateRoutes, PublicRoutes } from './models'
import { AuthGuard } from './guards'
import Private from './pages/Dashboard/Private'
import RoutesWithNotFound from './utilities/routesWithNotFound'

// para este proyecto solo sera necesario instalar npm install react-router-dom
// para el tema de redux los clasicos: npm install @reduxjs/toolkit, npm install react-redux 

// se añadio esta extension ES7+ React/Redux/React-Native snippets
// tambien esta: Auto Barrel for VSCode pero no me gusta


// para que el redux funcione entre pages debemos guardar en storage la informacion
function App() {
  return (
    <div>
      <Provider store={riemStore}>
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE}/>}></Route>  {/* es buena practica de dafult q navegue a la parte privada */}
            <Route path='*' element={`NOT FOUND`}> </Route>
            <Route path={PublicRoutes.LOGIN} element={<Login />}></Route>
            <Route element={<AuthGuard />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />}></Route>
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
