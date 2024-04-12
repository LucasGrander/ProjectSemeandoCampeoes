import {  useState } from 'react'
import './cadaster.css'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import MyInput from '../components/MyInput'
import Mancha from '../assets/mancha-background-cadaster.png'
import jiu1 from '../assets/jiu1-dePe.png'
import jiu2 from '../assets/jiu2-pernaAberta.png'
import jiu3 from '../assets/jiu3-kimono.png'
import jiu4 from '../assets/jiu5-luta.png'
import tel from '../assets/telephone.svg'
import responsavel from '../assets/responsavel.svg'
import username from '../assets/userNOME.svg'
import MyButton from '../components/MyButton'
import MyPhoneButton from '../components/MyPhoneButton'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'

const Cadaster = () => {
//nome focus
    const [focusNome, setFocusNome] = useState(false)

    const handleFocusedNome = () => {
        setFocusNome(true)
    }
    const handleNotFocusedNome = () => {
        if(valueNome.trim() == ""){
            setFocusNome(false)
        }
        else{
            setFocusNome(true)
        }
    }

    const [valueNome, setValueNome] = useState("")

//nome do resp focus
    const [focusNomeResp, setFocusNomeResp] = useState(false)

    const handleFocusedNomeResp = () => {
        setFocusNomeResp(true)
    }
    const handleNotFocusedNomeResp = () => {
        if(valueNomeResp.trim() == ""){
            setFocusNomeResp(false)
        }
        else{
            setFocusNomeResp(true)
        }
    }
    const [valueNomeResp, setValueNomeResp] = useState("")


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

    return(
        <div className="page-cadaster">
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
                </div>
            </header>
            <div className="container-banner-form">
                <img className='jiu1' src={jiu1}></img>
                <img className='jiu2' src={jiu2}></img>
                <img className='jiu3' src={jiu3}></img>
                <img className='jiu4' src={jiu4}></img>
                <div className="container-banner">
                    <div className="content-banner">
                        <img src={Mancha} alt='mancha de fundo'></img>
                        <span>FAÇA PARTE!</span>
                        <div className="box-name">
                            <span>Semeando</span>   
                            <span>Campeões</span>
                        </div>
                    </div>
                </div>
                <div className="container-cadaster">
                    <div className="content-cadaster">
                        <span className='title-cadaster' >Cadastro (fila de espera)</span>
                        <div className="button-label-container">
                            <label className={focusNome ? "labelFocusedNome" : "labelNotFocusedNome"} htmlFor='nome'>Nome completo</label>
                            <MyInput
                                id="nome"
                                onChange={(e) => setValueNome(e.target.value)}
                                onFocus={handleFocusedNome}
                                onBlur={handleNotFocusedNome}
                                className={focusNome ? "focusedNome" : "notFocusedNome"}
                                type='text'
                                width= "90%"
                                height= "100%"
                                padding="0vh 8vh 0vh 2.5vh"
                                fontSize= "2.4vh"
                                border= "solid .3vh black"
                                borderBottom="solid .3vh black"
                                borderRadius='.6vh'
                                backgroundColor="transparent"
                                transition= ".4s"
                                enter= "transparent"
                                leave= "transparent"
                            />
                            <img src={username}></img>
                        </div>

                        <div className="button-label-container">
                            <label className="labelFocusedDate" htmlFor='date'>Data de nascimento</label>
                            <MyInput
                                id='date'
                                type='date'
                                width= "90%"
                                height= "100%"
                                padding="2.5vh"
                                fontSize= "2.4vh"
                                border= "solid .3vh black"
                                borderBottom="solid .3vh black"
                                borderRadius='.6vh'
                                background-color= "transparent"
                                transition= ".4s"
                                enter= "transparent"
                                leave= "transparent"
                                />
                        </div>

                        <div className="button-label-container">
                        <label className={"labelFocusedTelefone"} htmlFor='telefone'>Número de telefone</label>
                            <MyPhoneButton
                            
                            />
                                <img src={tel}></img>
                        </div>

                        <div className="button-label-container">
                            <label className={focusNomeResp ? "labelFocusedNomeResp" : "labelNotFocusedNomeResp"} htmlFor='nomeResp'>Nome completo do responsável</label>
                            <MyInput
                                id="nomeResp"
                                onChange={(e) => setValueNomeResp(e.target.value)}
                                onFocus={handleFocusedNomeResp}
                                onBlur={handleNotFocusedNomeResp}
                                className={focusNomeResp ? "focused" : "notFocused"}
                                type='text'
                                width= "90%"
                                height= "100%"
                                padding="0vh 8vh 0vh 2.5vh"
                                fontSize= "2.4vh"
                                border= "solid .3vh black"
                                borderBottom="solid .3vh black"
                                borderRadius='.6vh'
                                background-color= "transparent"
                                transition= ".4s"
                                enter= "transparent"
                                leave= "transparent"
                            />
                            <img src={responsavel}></img>
                        </div>

                        <MyButton
                            width= "45%"
                            height= "8%"
                            padding="1vh"
                            cursor= "pointer"
                            fontSize= "2.5vh"
                            fontWeight= "bold"
                            background-color= "rgba(255, 0, 0, 0.3)"
                            border= ".3vh black solid"
                            borderBottom= ".3vh black solid"
                            borderRadius=".6vh"
                            transition= ".3s"
                            children="Enviar"
                            enter="rgba(255, 0, 0, 0.5)"
                            leave="rgba(255, 0, 0, 0.3)"
                        />
                    <div className="redirect-login">
                        <span className='question'>Já é aluno?<a onClick={handleOnClickLogin} >Entrar.</a></span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadaster