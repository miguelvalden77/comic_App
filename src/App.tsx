import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import CharacterDetails from './pages/CharacterDetails'
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
        <Route path='/characters/:charId/details' element={<CharacterDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
