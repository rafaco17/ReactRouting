import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'

// para este proyecto solo sera necesario instalar npm install react-router-dom
// para el tema de redux los clasicos: npm install @reduxjs/toolkit, npm install react-redux 

// se añadio esta extension ES7+ React/Redux/React-Native snippets
// tambien esta: Auto Barrel for VSCode pero no me gusta

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='*' element={`NOT FOUND`}> </Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
