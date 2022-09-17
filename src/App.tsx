import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'

// Components

// Pages
import Comics from './pages/Comics'
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
        <Route path='/comics/all' element={<Comics/>}/>
      </Routes>
    </div>
  )
}

export default App
