import './galeriaIretama.css'
import overlayText from '../assets/overlayLoadingTextSemeandoCampeoes.gif'
import overlayText2 from '../assets/overlayLoadingTextLoading.gif'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import { useState } from 'react'

const GaleriaIretama = () => {
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
    <div className="page-galeria-iretama">
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
                <span className="subtitle">Galeria: Iretama</span>
            </div>
        </header>
    </div>
  )
}

export default GaleriaIretama