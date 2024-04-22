import './galeriaLP.css'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import teste from '../assets/Icopa.png'
import { useState } from 'react'
import returnIcon from '../assets/returnIcon.svg'

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

  const handleOnClickReturn = () => {
    setOverlay(true)

    setTimeout(() => {
        window.location.href = '/galeria-de-fotos'
    }, 1500)

    setTimeout(() => {
        setOverlay(false)
    }, 2000)
}

  return (
    <div className="page-galeria-lp">
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
                <span className="subtitle">Galeria: Lar Parana</span>
            </div>
        </header>

        <div className="container-photos-lp">

          <div className="content-tripple">
          <div className="box-return">
                <div className="title-return">
                  <span>Escolher outra galeria:</span>
                </div>
                <div className="icon-return">
                  <img onClick={handleOnClickReturn} src={returnIcon} alt="icone de retornar" />
                </div>
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

export default GaleriaLP