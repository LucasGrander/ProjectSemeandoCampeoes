import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import './photos.css'
import ImagemTemporaria from '../assets/temporaria-image.jpg'

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
                        <img src={ImagemTemporaria} alt='imagem do ct'></img>
                        <button className='photo-btn' >Fotos</button>
                    </div>
                    <div className="name-ct">
                            <span>Nome do CT</span>
                            <p>Atualizado:</p>
                            <p>28/04/202</p>
                        </div>
                </div>

                <div className="box-ct">
                    <div className="box-photo-ct">
                        <img src={ImagemTemporaria} alt='imagem do ct'></img>
                        <button className='photo-btn'>Fotos</button>
                    </div>
                    <div className="name-ct">
                            <span>Nome do CT</span>
                            <p>Atualizado:</p>
                            <p>28/04/202</p>
                        </div>
                </div>

                <div className="box-ct">
                    <div className="box-photo-ct">
                        <img src={ImagemTemporaria} alt='imagem do ct'></img>
                        <button className='photo-btn' >Fotos</button>
                    </div>
                    <div className="name-ct">
                            <span>Nome do CT</span>
                            <p>Atualizado:</p>
                            <p>28/04/202</p>
                        </div>
                </div>

                <div className="box-ct">
                    <div className="box-photo-ct">
                        <img src={ImagemTemporaria} alt='imagem do ct'></img>
                        <button className='photo-btn' >Fotos</button>
                    </div>
                    <div className="name-ct">
                            <span>Nome do CT</span>
                            <p>Atualizado:</p>
                            <p>28/04/202</p>
                        </div>
                </div>
            </div>
            <div className="bottom-photos">
                <span>Campeonatos</span>
            </div>
    </div>
  )
}

export default Photos