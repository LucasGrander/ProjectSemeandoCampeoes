import './App.css'
import Cadaster from './Pages/cadaster'
import GaleriaCentro from './Pages/galeriaCentro'
import GaleriaIretama from './Pages/galeriaIretama'
import GaleriaLP from './Pages/galeriaLP'
import Home from './Pages/home'
import Login from './Pages/login'
import Photos from './Pages/photos'
import InformationEdit from './Pages/informationEdit'
import InformationSee from './Pages/informationSee'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path= "/" element = {<Home />}/>
            <Route path= "/login" element = {<Login />}/>
            <Route path= "/galeria-de-fotos" element = {<Photos />}/>
            <Route path= "/participe" element = {<Cadaster />}/>
            <Route path= "/galeria-de-fotos/Galeria-Iretama" element = {<GaleriaIretama />}/>
            <Route path= "/galeria-de-fotos/Galeria-Centro" element = {<GaleriaCentro />}/>
            <Route path= "/galeria-de-fotos/Galeria-LarParana" element = {<GaleriaLP />}/>
            <Route path= "/login/informações-acessoProfessor" element = {<InformationEdit />}/>
            <Route path= "/login/informações-acessoAluno" element = {<InformationSee />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
