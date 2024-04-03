import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import './photos.css'
import ImagemTemporaria from '../assets/temporaria-image.jpg'
import PSCC from '../assets/PSCC.jpeg'
import PSCLP from '../assets/PSCLP.jpeg'

const Photos = () => {
    return(
    <div className="page-photos">
        <header>
            <div className="logo">
                <a href='/'><img src={LogoSemeandoCampeoes} alt="Logo Semeando Campeões"></img></a>
            </div>
            <div className="title">
                <h1>Semeando Campeões</h1>
            </div>
        </header>
            <div className="title-photos">
                <span>Fotos dos Centros de Treinamento</span>
            </div>

            <div className="container-photos">
                <div className="box-ct">
                    <div className="box-photo-ct">
                        <img src={PSCC} alt='imagem do ct'></img>
                        <button className='photo-btn' >Fotos</button>
                    </div>
                    <div className="name-ct">
                            <span>CT Centro</span>
                            <p>Atualizado:</p>
                            <p>03/04/2024</p>
                        </div>
                </div>

                <div className="box-ct">
                    <div className="box-photo-ct">
                        <img src={PSCLP} alt='imagem do ct'></img>
                        <button className='photo-btn'>Fotos</button>
                    </div>
                    <div className="name-ct">
                            <span>CT Lar Paraná</span>
                            <p>Atualizado:</p>
                            <p>03/04/2024</p>
                        </div>
                </div>

                <div className="box-ct">
                    <div className="box-photo-ct">
                        <img src={ImagemTemporaria} alt='imagem do ct'></img>
                        <button className='photo-btn' >Fotos</button>
                    </div>
                    <div className="name-ct">
                            <span>CT Iretama</span>
                            <p>Atualizado:</p>
                            <p>Pendente</p>
                        </div>
                </div>
            </div>
            <div className="title-photos">
                <span>Copa Semeando Campeões</span>
                
            </div>
    </div>
  )
}

export default Photos