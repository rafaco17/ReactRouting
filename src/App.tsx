import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Provider } from 'react-redux'
import riemStore from './redux/store'

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
            <Route path='/' element={<Login />}></Route>
            <Route path='*' element={`NOT FOUND`}> </Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
