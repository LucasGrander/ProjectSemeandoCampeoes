import './galeriaIPB.css'
import overlayText from '../assets/overlayLoadingTextSemeandoCampeoes.gif'
import overlayText2 from '../assets/overlayLoadingTextLoading.gif'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import { useState } from 'react'

const GaleriaLP = () => {
  const [overlay, setOverlay] = useState (false)

  const handleOnClickHome = () => {
      setOverlay(true)
  
      setTimeout(() => {
          window.location.href = '/'
      }, 1500)

      setTimeout(() => {
          setOverlay(false)
      }, 2000)
  }

  return (
    <div className="page-galeria-larparana">
      <div style={{display: overlay? 'flex' : 'none' }} className="overlay">
          <img className='loading-top' src={overlayText2}></img>
          <img className='loading-horiz' src={overlayText}></img>
      </div>
      <header>
          <div className="logo">
              <img onClick={handleOnClickHome} src={LogoSemeandoCampeoes} alt="Logo Semeando Campeões"></img>
          </div>
          <div className="title">
                <h1>Semeando Campeões</h1>
                <span className="subtitle">Galeria: Lar Parana</span>
            </div>
        </header>
    </div>
  )
}

export default GaleriaLP