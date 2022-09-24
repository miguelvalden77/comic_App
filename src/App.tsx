import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import CharacterDetails from './pages/CharacterDetails'
import Characters from './pages/Characters'
import NotFound from './pages/errors/NotFound'
import Error from "./pages/errors/Error"
import 'bootstrap/dist/css/bootstrap.min.css'

// Components

// Pages
import Home from './pages/Home'
import Comic from './pages/Comic'
import Serie from './pages/Serie'

function App() {

  return (
    <div className='app'>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/characters/all' element={<Characters/>}/>
        <Route path='/characters/:charId/details' element={<CharacterDetails/>}/>
        <Route path='/comic/:comicId/details' element={<Comic/>}/>
        <Route path='/serie/:serieId/details' element={<Serie/>}/>

        {/* Errors */}
        <Route path="/*" element={<NotFound/>}/>
        <Route path='/error' element={<Error/>}/>

      </Routes>
    </div>
  )
}

export default App
