import { useState } from 'react'
import './photos.css'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import ImagemTemporaria from '../assets/temporaria-image.jpg'
import PSCC from '../assets/PSCC.jpeg'
import PSCLP from '../assets/PSCLP.jpeg'
import Icopa from '../assets/Icopa.png'
import IIcopa from '../assets/IIcopa.jpeg'
import IIIcopa from '../assets/IIIcopa.webp'
import IVcopa from '../assets/IVcopa.webp'
import galeryICON from '../assets/galeryICON.svg'
import mousePointer from '../assets/mouseHOVER.svg'
import top1Star from '../assets/top1-star.svg'
import trohpy from '../assets/trophy.svg'
import medalha from '../assets/medal.svg'
import iconCamPhotos from '../assets/icon-camera-photo.svg'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import Footer from '../components/Footer'


const Photos = () => {

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

    const handleOnClickGaleriaIretama = () => {
        setOverlay(true)
    
        setTimeout(() => {
            window.location.href = '/fotos/Galeria-Iretama'
        }, 1500)

        setTimeout(() => {
            setOverlay(false)
        }, 2000)
    }

    const handleOnClickGaleriaLarParana = () => {
        setOverlay(true)
    
        setTimeout(() => {
            window.location.href = '/fotos/Galeria-LarParana'
        }, 1500)
        

        setTimeout(() => {
            setOverlay(false)
        }, 2000)
    }

    const handleOnClickGaleriaCentro = () => {
        setOverlay(true)
    
        setTimeout(() => {
            window.location.href = '/fotos/Galeria-Centro'
        }, 1500)

        setTimeout(() => {
            setOverlay(false)
        }, 2000)
    }
    return(
    <div className="page-photos">
        <div style={{display: overlay? 'flex' : 'none' }} className="overlay">
            <img className='loading-top' src={overlayLoadingCircle}></img>
            <img className='loading-logo' src={LogoSemeandoCampeoes}></img>
        </div>
        <img className='background-page-photos' src='https://wallpapercave.com/wp/X3SKsUe.jpg'></img>
        <img className='camera-right' src={iconCamPhotos}></img>
        <img className='camera-left' src={iconCamPhotos}></img>
        <img className='trophy-left' src={top1Star}></img>
        <img className='trophy-right' src={trohpy}></img>
        <img className='medal-left' src={medalha}></img>
        <img className='medal-right' src={medalha}></img>
        <header>
            <div className="logo">
                <img onClick={handleOnClickHome} src={LogoSemeandoCampeoes} alt="Logo Semeando Campeões"></img>
            </div>
            <div className="title">
                <h1>Semeando Campeões</h1>
                <span className="subtitle">Galeria de fotos</span>
            </div>
        </header>

            {/* //container superior */}
            <div className="title-photos">
                    <span>Centros De Treinamento</span>
                </div>  
            <div className="container-photos">
                <div className="box-ct">
                        <img className='bg-box-cards' src={PSCC} alt='imagem do ct'></img>
                        <div className="name-ct">
                        <div className="infos-card-galeria">
                            <span>CT Centro</span>
                        </div>
                        <div className="icon-card-galeria">
                            <div className="att-photos-time">
                                <p>Atualizado:</p>
                                <p>09/04/2024</p>
                            </div>
                            <div className="img-icon-media">
                                <img onClick={handleOnClickGaleriaCentro} src={galeryICON}></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box-ct">
                        <img className='bg-box-cards' src={PSCLP} alt='imagem do ct'></img>
                        <div className="name-ct">
                        <div className="infos-card-galeria">
                            <span>CT Lar Paraná</span>
                            <img className='hide-mouse' src={mousePointer}></img>
                        </div>
                        <div className="icon-card-galeria">
                            <div className="att-photos-time">
                                <p>Atualizado:</p>
                                <p>09/04/2024</p>
                            </div>
                            <div className="img-icon-media">
                            <img onClick={handleOnClickGaleriaLarParana} src={galeryICON}></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box-ct">
                        <img className='bg-box-cards' src={ImagemTemporaria} alt='imagem do ct'></img>
                    <div className="name-ct">
                        <div className="infos-card-galeria">
                            <span>CT Iretama</span>
                        </div>
                        <div className="icon-card-galeria">
                            <div className="att-photos-time">
                                <p>Atualizado:</p>
                                <p>Pendente</p>
                            </div>
                            <div className="img-icon-media">
                            <img onClick={handleOnClickGaleriaIretama} src={galeryICON}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* //container inferior -- FOTOS COPA PSC*/}
            <div className="title-photos2">
                <span>Copa - Semeando Campeões</span>
            </div>
            <div className="container-photos2">
                <div className="box-ct2">
                    <img className='bg-box-cards2' src={Icopa} alt='imagem do ct2'></img>
                    <div className="name-ct2">
                        <div className="infos-card-galeria2">
                            <span>COPA I</span>
                        </div>
                        <div className="icon-card-galeria2">
                            <div className="att-photos-time2">
                                <p>Atualizado:</p>
                                <p>09/04/2024</p>
                            </div>
                            <div className="img-icon-media2">
                                <a href='/fotos'><img src={galeryICON}></img></a> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box-ct2">
                    <img className='bg-box-cards2' src={IIcopa} alt='imagem do ct2'></img>
                    <div className="name-ct2">
                        <div className="infos-card-galeria2">
                            <span>COPA II</span>
                        </div>
                        <div className="icon-card-galeria2">
                            <div className="att-photos-time2">
                                <p>Atualizado:</p>
                                <p>09/04/2024</p>
                            </div>
                            <div className="img-icon-media2">
                                <a href='/fotos'><img src={galeryICON}></img></a> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box-ct2">
                    <img className='bg-box-cards2' src={IIIcopa} alt='imagem do ct2'></img>
                    <div className="name-ct2">
                        <div className="infos-card-galeria2">
                            <span>COPA III</span>
                        </div>
                        <div className="icon-card-galeria2">
                            <div className="att-photos-time2">
                                <p>Atualizado:</p>
                                <p>09/04/2024</p>
                            </div>
                            <div className="img-icon-media2">
                                <a href='/fotos'><img src={galeryICON}></img></a> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box-ct2">
                    <img className='bg-box-cards2' src={IVcopa} alt='imagem do ct2'></img>
                    <div className="name-ct2">
                        <div className="infos-card-galeria2">
                            <span>COPA IV</span>
                        </div>
                        <div className="icon-card-galeria2">
                            <div className="att-photos-time2">
                                <p>Atualizado:</p>
                                <p>09/04/2024</p>
                            </div>
                            <div className="img-icon-media2">
                                <a href='/fotos'><img src={galeryICON}></img></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </div>
  )
}

export default Photos