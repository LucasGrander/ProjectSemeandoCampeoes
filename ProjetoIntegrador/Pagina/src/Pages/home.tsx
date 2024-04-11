import { useState } from 'react'
import './home.css'
import LogoSemeandoCampeoes from "../assets/LogoSemeandoCampeoes.png"
import LogoInstagram from "../assets/instagram.svg"
import LogoFacebook from "../assets/facebook.svg"
import LogoYoutube from "../assets/youtube.svg"
import UserLogin from "../assets/userICON.svg"
import Camera from "../assets/camPHOTO.svg"
import HandShake from "../assets/handShake.svg"
import MyButton from '../components/MyButton'
import Instrutores from '../components/Instrutores'
import CentrosDeTreinamento from '../components/CentrosDeTreinamento'
import Historico from '../components/Historico'
import overlayText from '../assets/overlayLoadingTextSemeandoCampeoes.gif'
import overlayText2 from '../assets/overlayLoadingTextLoading.gif'

//exemplos de componentes a serem criados
  
  

const Home = () => {
    const [content, setContent] = useState('cts')
    
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

    const handleOnClickLogin = () => {
        setOverlay(true)
    
        setTimeout(() => {
            window.location.href = '/login'
        }, 1500)

        setTimeout(() => {
            setOverlay(false)
        }, 2000)
    }

    const handleOnClickFotos = () => {
        setOverlay(true)
    
        setTimeout(() => {
            window.location.href = '/fotos'
        }, 1500)

        setTimeout(() => {
            setOverlay(false)
        }, 2000)
        
    }

    const handleOnClickParticipe = () => {
        setOverlay(true)
    
        setTimeout(() => {
            window.location.href = '/participe'
        }, 1500)

        setTimeout(() => {
            setOverlay(false)
        }, 2000)
    }


    return(
    <>
        <div className="page-home">
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
                </div>
                <div className="redes-sociais">
                    <a href="https://www.instagram.com/semeando.campeoes/" target="_blank" ><img src={LogoInstagram} alt="logo do instagram"></img></a>
                    <a href="https://www.facebook.com/semeandocampeoes/" target="_blank" ><img src={LogoFacebook} alt="logo do facebook"></img></a>
                    <a href="https://www.youtube.com/@semeandocampeoes7001" target="_blank" ><img className='youtube' src={LogoYoutube} alt="logo do youtube"></img></a>
                </div>
                <div className="login-acess">
                    <img onClick={handleOnClickLogin} src={UserLogin} alt="user login"></img>
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
                borderBottom="solid .7vh black"
                borderRadius=".4vh"
                fontSize="2.5vh"
                fontWeight="700"
                transition=".3s"
                boxShadow=".5vh .5vh .5vh rgba(0, 0, 0, 0.9)"
                enter="rgba(150, 150, 150, 0.5)"
                leave="white"
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
                borderBottom="solid .7vh black"
                borderRadius=".4vh"
                fontSize="2.5vh"
                fontWeight="700"
                transition=".3s"
                boxShadow=".5vh .5vh .5vh rgba(0, 0, 0, 0.9)"
                enter="rgba(150, 150, 150, 0.5)"
                leave="white"
                >
                    Seja aluno!<img src={HandShake} alt='aperto de mãos' />
            </MyButton>
            </nav>

            <div className="container-home">
                <div className="title-container">
                    <span>Sobre nós</span>
                </div>
                <div className="info-button">
                <MyButton
                    onClick={() => setContent("instrutores")}
                    className={ content == "instrutores" ? "active" : "inative" }
                    width= "25%"
                    height= "5.5vh"
                    cursor= "pointer"
                    fontSize= "2.75vh"
                    fontWeight= "bold"
                    border= "none"
                    background-color= "transparent"
                    borderBottom= ".6vh black solid"
                    transition= ".4s"
                    children="Instrutores"
                    enter={content == "instrutores" ? "black" : "rgba(85, 85, 85, 0.55)"}
                    leave={content == "instrutores" ? "black" : "transparent"}
                />


                <MyButton
                    onClick={() => setContent("cts")}
                    className={ content == "cts" ? "active" : "inative" }
                    width= "25%"
                    height= "5.5vh"
                    cursor= "pointer"
                    fontSize= "2.75vh"
                    fontWeight= "bold"
                    border= "none"
                    background-color= "transparent"
                    borderBottom= ".6vh black solid"
                    transition= ".4s"
                    children="Centros de treinamento"
                    enter={content == "cts" ? "black" : "rgba(85, 85, 85, 0.55)"}
                    leave={content == "cts" ? "black" : "transparent"}
                />


                <MyButton
                    onClick={() => setContent("histórico")}
                    className={ content == "histórico" ? "active" : "inative" }
                    width= "25%"
                    height= "5.5vh"
                    cursor= "pointer"
                    fontSize= "2.75vh"
                    fontWeight= "bold"
                    border= "none"
                    background-color= "transparent"
                    borderBottom= ".6vh black solid"
                    transition= ".4s"
                    children="Histórico"
                    enter={content == "histórico" ? "black" : "rgba(85, 85, 85, 0.55)"}
                    leave={content == "histórico" ? "black" : "transparent"}
                />

                </div>
                <div className="infos">
                {content === 'instrutores' && <Instrutores id={content == "instrutores" ? "active" : "inative"} />}
                {content === 'cts' && <CentrosDeTreinamento id={content == "cts" ? "active" : "inative"} />}
                {content === 'histórico' && <Historico id={content == "histórico" ? "active" : "inative"} />}
                </div>
            </div>
            <footer>
                <div className='content-footer'>
                    <div className="icon">
                        <img src={LogoSemeandoCampeoes} alt='logo Semeando Campeões'></img>
                    </div>
                   <div className="text">
                    <div>
                        <span>Semeando Campeões</span>
                    </div>
                    <div className='copy'>
                    Copyright © 2024 Lucas Grander & Ricardo M. Batista.
                    </div>
                   </div>
                </div>
            </footer>
        </div>
    </>
    )
}

export default Home