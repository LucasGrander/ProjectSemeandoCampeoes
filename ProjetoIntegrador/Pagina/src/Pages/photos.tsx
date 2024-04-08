import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import './photos.css'
import ImagemTemporaria from '../assets/temporaria-image.jpg'
import PSCC from '../assets/PSCC.jpeg'
import PSCLP from '../assets/PSCLP.jpeg'
import Icopa from '../assets/Icopa.png'
import IIcopa from '../assets/IIcopa.jpeg'
import IIIcopa from '../assets/IIIcopa.webp'
import IVcopa from '../assets/IVcopa.webp'
import galeryICON from '../assets/galeryICON.svg'
import mousePointer from '../assets/mouseHOVER.svg'


const Photos = () => {
    return(
    <div className="page-photos">
        <header>
            <div className="logo">
                <a href='/'><img src={LogoSemeandoCampeoes} alt="Logo Semeando Campeões"></img></a>
            </div>
            <div className="title">
                <h1>Semeando Campeões</h1>
                <span className="subtitle">Galeria de fotos</span>
            </div>
        </header>

            <div className="title-photos">
                <span>Centros de treinamento</span>
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
                                <a href='/fotos'><img src={galeryICON}></img></a> 
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
                            <a href='/fotos'><img src={galeryICON}></img></a>
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
                            <a href='/fotos'><img src={galeryICON}></img></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title-photos2">
                <span>Copa Semeando Campeões</span>
                
            </div>
            <div className="container-photos">
                <div className="box-ct">
                    <div className="box-photo-ct">
                        <img src={Icopa} alt='imagem do ct'></img>
                        <button className='photo-btn' >Fotos</button>
                    </div>
                    <div className="name-ct">
                            <span>I COPA KIDS</span>
                            <p>Quadra de Esportes</p>
                            <p>Escola Municipal Monteiro Lobato</p>
                            <p>2019</p>
                        </div>
                </div>
                <div className="box-ct">
                    <div className="box-photo-ct">
                        <img src={IIcopa} alt='imagem do ct'></img>
                        <button className='photo-btn' >Fotos</button>
                    </div>
                    <div className="name-ct">
                            <span>II COPA KIDS</span>
                            <p>Sede do PSC</p>
                            <p>2020</p>
                        </div>
                </div>
                <div className="box-ct">
                    <div className="box-photo-ct">
                        <img src={IIIcopa} alt='imagem do ct'></img>
                        <button className='photo-btn' >Fotos</button>
                    </div>
                    <div className="name-ct">
                            <span>III COPA KIDS</span>
                            <p>Ginasio de Esportes JK</p>
                            <p>2022</p>
                        </div>
                </div>
                <div className="box-ct">
                    <div className="box-photo-ct">
                        <img src={IVcopa} alt='imagem do ct'></img>
                        <button className='photo-btn' >Fotos</button>
                    </div>
                    <div className="name-ct">
                            <span>IV COPA KIDS</span>
                            <p>Ginasio de Esportes JK</p>
                            <p>2023</p>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Photos