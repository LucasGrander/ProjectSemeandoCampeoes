import './galeriaIretama.css'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import teste from '../assets/PSCC.jpeg'
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
          <img className='loading-top' src={overlayLoadingCircle}></img>
          <img className='loading-logo' src={LogoSemeandoCampeoes}></img>
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

        <div className="container-photos-iretama">

          <div className="content-tripple">
            <div className="box">
              <img src={teste}></img>
            </div>
            <div className="box">
              <img src={teste}></img>
            </div>
            <div className="box">
              <img src={teste}></img>
            </div>
          </div>

          <div className="content-tripple">
            <div className="box">
              {/* <img src={''}></img> */}
            </div>
            <div className="box">
              {/* <img src={''}></img> */}
            </div>
            <div className="box">
              {/* <img src={''}></img> */}
            </div>
          </div>

          <div className="content-tripple">
            <div className="box">
              {/* <img src={''}></img> */}
            </div>
            <div className="box">
              {/* <img src={''}></img> */}
            </div>
            <div className="box">
              {/* <img src={''}></img> */}
            </div>
          </div>

        </div>
    </div>
  )
}

export default GaleriaIretama