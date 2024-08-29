import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Provider } from 'react-redux'
import riemStore from './redux/store'
import { PrivateRoutes, PublicRoutes } from './models'
import { AuthGuard } from './guards'

// para este proyecto solo sera necesario instalar npm install react-router-dom
// para el tema de redux los clasicos: npm install @reduxjs/toolkit, npm install react-redux 

// se añadio esta extension ES7+ React/Redux/React-Native snippets
// tambien esta: Auto Barrel for VSCode pero no me gusta

function App() {
  return (
    <div>
      <Provider store={riemStore}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD}/>}></Route>  {/* es buena practica de dafult q navegue a la parte privada */}
            <Route path='*' element={`NOT FOUND`}> </Route>
            <Route path={PublicRoutes.LOGIN} element={<Login />}></Route>
            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
