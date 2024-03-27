import './home.css'
import LogoSemeandoCampeoes from "../assets/LogoSemeandoCampeoes.png"
import LogoInstagram from "../assets/facebook.svg"
import LogoFacebook from "../assets/instagram.svg"
import LogoYoutube from "../assets/youtube.svg"
import UserLogin from "../assets/userICON.svg"
import Camera from "../assets/camPHOTO.svg"
import HandShake from "../assets/handShake.svg"

const Home = () => {

    return(
        <>
            <header>
                <div className="logo">
                    <a href='#'><img src={LogoSemeandoCampeoes} alt="Logo Semeando Campeões"></img></a>
                </div>
                <div className="title">
                    <h1>Semeando Campeões</h1>
                </div>
                <div className="redes-sociais">
                    <a href="#"><img src={LogoInstagram} alt="logo do instagram"></img></a>
                    <a href="#"><img src={LogoFacebook} alt="logo do facebook"></img></a>
                    <a href="#"><img className='youtube' src={LogoYoutube} alt="logo do youtube"></img></a>
                </div>
                <div className="login-acess">
                    <a href="#"><img src={UserLogin} alt="user login"></img></a>
                </div>
            </header>
            <nav>
                <button>Galeria de Fotos<img src={Camera}></img></button>
                <button className='btn1'>Participe!<img src={HandShake}></img></button>
            </nav>
            <div className="container">
                <div className="content">
                    <div className="title-container">
                        <span>Sobre nós</span>
                    </div>
                    <div className="info-button">
                        <button>Instrutores</button>
                        <button>Centros de treinamento</button>
                        <button>Histórico</button>
                    </div>
                    <div className="infos">
                        
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Home