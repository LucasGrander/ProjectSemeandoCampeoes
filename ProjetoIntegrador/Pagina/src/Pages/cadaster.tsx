import {  useState } from 'react'
import './cadaster.css'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import MyInput from '../components/MyInput'
import Mancha from '../assets/mancha-background-cadaster.png'
import decoCadaster from '../assets/designForLogin.svg'
import tel from '../assets/telephone.svg'
import responsavel from '../assets/responsavel.svg'
import username from '../assets/userNOME.svg'
import MyButton from '../components/MyButton'
import MyPhoneButton from '../components/MyPhoneButton'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import cityICON from '../assets/city.svg'
import streetICON from '../assets/street.svg'
import neighICON from '../assets/neigh.svg'
import complementICON from '../assets/complemento.svg'
import numResidICON from '../assets/numResid.svg'

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

    const [focusSelectBox, setFocusSelectBox] = useState(false)
    const [valueSelectBox, setvalueSelectBox] = useState("")

    const handleFocusedSelectBox = () => {
        setFocusSelectBox(true)
    }
    const handleNotFocusedSelectBox = () => {
        if(valueSelectBox.trim() == ""){
            setFocusSelectBox(false)
        }
        else{
            setFocusSelectBox(true)
        }
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
                <img className='deco-cadaster-top' src={decoCadaster}></img>
                <img className='deco-cadaster-top2' src={decoCadaster}></img>
                <img className='deco-cadaster-bottom' src={decoCadaster}></img>
                <img className='deco-cadaster-bottom2' src={decoCadaster}></img>
                <div className="container-banner">
                    <div className="content-banner">
                        <img src={Mancha} alt='mancha de fundo'></img>
                        <span className='text-geral' >FAÇA PARTE!!</span>
                        <div className="box-name">
                            <span>Semeando</span>   
                            <span>Campeões</span>
                        </div>
                    </div>
                </div>
                <div className="container-cadaster">
                    <div className="content-cadaster">
                        <div className="forms-cadaster">
                            <span className='title-cadaster'>Cadastro (fila de espera)</span>
                            <span className='title-info-pessoal'>Informações pessoais</span>
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

                            <span className='title-info-endereco'>Informações de endereço</span>
                            <div className="button-label-container">
                                <label className={focusNome ? "labelFocusedNome" : "labelNotFocusedNome"} htmlFor='nome'>Cidade</label>
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
                                <img src={cityICON}></img>
                            </div>

                            <div className="button-label-container">
                                <label className={focusNome ? "labelFocusedNome" : "labelNotFocusedNome"} htmlFor='nome'>Bairro</label>
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
                                <img src={neighICON}></img>
                            </div>

                            <div className="button-label-container">
                                <label className={focusNome ? "labelFocusedNome" : "labelNotFocusedNome"} htmlFor='nome'>Rua</label>
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
                                <img src={streetICON}></img>
                            </div>

                            <div className="container-comp-num">
                                <div className="button-label-container-comp">
                                    <div className="complemento"></div>
                                    <label className={focusNome ? "labelFocusedNome" : "labelNotFocusedNome"} htmlFor='nome'>Complemento</label>
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
                                    <img src={complementICON}></img>
                                </div>

                                <div className="button-label-container-num">
                                    <div className="complemento"></div>
                                    <label className={focusNome ? "labelFocusedNome" : "labelNotFocusedNome"} htmlFor='nome'>N°</label>
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
                                    <img src={numResidICON}></img>
                                </div>
                            </div>
                            
                            <span className='title-info-ct'>Escolha um local de treino:</span>

                            <div className="button-label-container">
                                <label className={focusSelectBox ? "labelFocusedNome" : "labelNotFocusedNome"} htmlFor='ct'>Centro de treinamento</label>
                                <select value={valueSelectBox} onChange={(e) => setvalueSelectBox(e.target.value)} onFocus={handleFocusedSelectBox} onBlur={handleNotFocusedSelectBox} className='ct-box-pick' name="ct" id="ct">
                                    <option value="0" hidden></option>
                                    <option value="1">Centro de treinamento  -  Centro </option>
                                    <option value="2">Centro de treinamento  -  Lar  </option>
                                    <option value="3">Centro de treinamento  -  ginásio de Iretama </option>
                                    <option value="4">Centro de treinamento  -  ??? </option>
                                </select>
                            </div>

                            <MyButton
                                width= "45%"
                                height= "8vh"
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
                                enter="rgba(0, 0, 0, 0.2)"
                                leave="rgba(0, 0, 0, 0.3)"
                            />

                            <div className="redirect-login">
                                <span className='question'>Já é aluno?<a onClick={handleOnClickLogin} >Entrar.</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadaster