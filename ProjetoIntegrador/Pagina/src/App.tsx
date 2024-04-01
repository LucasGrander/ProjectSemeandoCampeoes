import './App.css'
import Cadaster from './Pages/cadaster'
import Home from './Pages/home'
import Login from './Pages/login'
import Photos from './Pages/photos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path= "/" element = {<Home />}/>
            <Route path= "/login" element = {<Login />}/>
            <Route path= "/fotos" element = {<Photos />}/>
            <Route path= "/participe" element = {<Cadaster />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
