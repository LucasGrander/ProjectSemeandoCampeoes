import './home.css'
import { Link } from "react-router-dom";
import LogoSemeandoCampeoes from "../assets/LogoSemeandoCampeoes.png"
import LogoInstagram from "../assets/facebook.svg"
import LogoFacebook from "../assets/instagram.svg"
import LogoYoutube from "../assets/youtube.svg"
import UserLogin from "../assets/userICON.svg"
import Camera from "../assets/camPHOTO.svg"
import HandShake from "../assets/handShake.svg"
import { useState } from 'react'
import MyButton from '../components/MyButton'

//exemplos de componentes a serem criados
function Instrutores() {
    return (
      <div>
        <h2>Instrutores</h2>
        <p>Conteúdo do componente Instrutores...</p>
      </div>
    );
  }

  function CentrosDeTreino() {
    return (
      <div>
        <h2>CT's</h2>
        <p>Conteúdo do componente CT's...</p>
      </div>
    );
  }
  
  function Histórico() {
    return (
      <div>
        <h2>Histórico</h2>
        <p>Conteúdo do componente Histórico...</p>
      </div>
    );
  }

const Home = () => {

    const [content, setContent] = useState('instrutores')

    const handleOnClickFotos = () => {
        setTimeout(()=> {
            window.location.href = `/fotos`
        }, 1500)
    }

    const handleOnClickParticipe = () => {
        setTimeout(()=> {
            window.location.href = `/participe`
        }, 1500)
    }

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
            <MyButton
                onClick={handleOnClickFotos}
                width="30vh"
                height="6vh"
                cursor="pointer"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
                border="solid .3vh black"
                borderRadius="2vh"
                fontSize="2.5vh"
                fontWeight="600"
                transition=".4s"
                leave="rgba(213, 213, 213, 0.659)"
                enter="rgba(224, 224, 224, 0.215)"
                >
                    Galeria de fotos <img src={Camera} alt='camera de foto' />
            </MyButton>

            <MyButton
                onClick={handleOnClickParticipe}
                width="30vh"
                height="6vh"
                cursor="pointer"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
                border="solid .3vh black"
                borderRadius="2vh"
                fontSize="2.7vh"
                fontWeight="600"
                transition=".4s"
                leave="rgba(213, 213, 213, 0.659)"
                enter="rgba(224, 224, 224, 0.215)"
                >
                    Participe!<img src={HandShake} alt='aperto de mãos' />
            </MyButton>
                
            </nav>
            <div className="container">
                <div className="content">
                    <div className="title-container">
                        <span>Sobre nós</span>
                    </div>
                    <div className="info-button">
                        <button onClick={() => setContent('instrutores')} >Instrutores</button>
                        <button onClick={() => setContent('cts')}>Centros de treinamento</button>
                        <button onClick={() => setContent('histórico')}>Histórico</button>
                    </div>
                    <div className="infos">
                    {content === 'instrutores' && <Instrutores />}
                    {content === 'cts' && <CentrosDeTreino />}
                    {content === 'histórico' && <Histórico />}
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Home