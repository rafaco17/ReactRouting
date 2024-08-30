import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux'
import riemStore from './redux/store'
import { PrivateRoutes, PublicRoutes } from './models'
import { AuthGuard } from './guards'
import RoutesWithNotFound from './utilities/routesWithNotFound'
import { lazy, Suspense } from 'react'

// para este proyecto solo sera necesario instalar npm install react-router-dom
// para el tema de redux los clasicos: npm install @reduxjs/toolkit, npm install react-redux 

// se añadio esta extension ES7+ React/Redux/React-Native snippets
// tambien esta: Auto Barrel for VSCode pero no me gusta

// para que el redux funcione entre pages debemos guardar en storage la informacion

// libreria q agreguemos al lazy libreria q debemos kitar de las importaciones
const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Dashboard/Private'))
// lo que realiza el lazy loading es solo cargar un componente cuando se quiera utilizar, mientras no se use no se cargara nunca.
// importante solo utilizar el lazy en aquellos componentes padres que contienne diferentes pages

function App() {
  return (
    <div>
      <Suspense fallback={<>Cargando</>}> {/* aca utilizamos nuestros spinners */}
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
      </Suspense>
    </div>
  )
}

export default App
