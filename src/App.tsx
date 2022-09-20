import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import Characters from './pages/Characters'

// Components

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <div>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/characters/all' element={<Characters/>}/>
      </Routes>
    </div>
  )
}

export default App
