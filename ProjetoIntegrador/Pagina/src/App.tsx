import './App.css'
import Cadaster from './Pages/cadaster'
import GaleriaCentro from './Pages/GaleriaCentro'
import GaleriaIPB from './Pages/GaleriaIPB'
import GaleriaIretama from './Pages/GaleriaIretama'
import GaleriaLP from './Pages/GaleriaLP'
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
            <Route path= "/fotos/galeria-Iretama" element = {<GaleriaIretama />}/>
            <Route path= "/fotos/galeria-Centro" element = {<GaleriaIPB />}/>
            <Route path= "/fotos/galeria-LarParana" element = {<GaleriaLP />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
