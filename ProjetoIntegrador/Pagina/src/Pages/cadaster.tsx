import {  useState, useTransition } from 'react'
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


    // *************************** Validação de label --- INFOS PESSOAIS ********************************
    //nome
    const [focusNome, setFocusNome] = useState(false)
    const [valueNome, setValueNome] = useState("")

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

    // data de nascimento
    const [valueDate, setValueDate] = useState("")

    //nome do responsável
    const [focusNomeResp, setFocusNomeResp] = useState(false)
    const [valueNomeResp, setValueNomeResp] = useState("")

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


    // *************************** Validação de label --- ENDEREÇO ********************************

    //cidade
    const [focusCity, setFocusCity] = useState(false)
    const [valueCity, setValueCity] = useState("")

    const handleFocusedCity = () => {
        setFocusCity(true)
    }
    const handleNotFocusedCity = () => {
        if(valueCity.trim() == ""){
            setFocusCity(false)
        }
        else{
            setFocusCity(true)
        }
    }
    //bairro
    const [focusBairro, setFocusBairro] = useState(false)
    const [valueBairro, setValueBairro] = useState("")

    const handleFocusedBairro = () => {
        setFocusBairro(true)
    }
    const handleNotFocusedBairro = () => {
        if(valueBairro.trim() == ""){
            setFocusBairro(false)
        }
        else{
            setFocusBairro(true)
        }
    }
    //rua
    const [focusRua, setFocusRua] = useState(false)
    const [valueRua, setValueRua] = useState("")

    const handleFocusedRua = () => {
        setFocusRua(true)
    }
    const handleNotFocusedRua = () => {
        if(valueRua.trim() == ""){
            setFocusRua(false)
        }
        else{
            setFocusRua(true)
        }
    }
    //complemento
    const [focusComplemento, setFocusComplemento] = useState(false)
    const [valueComplemento, setValueComplemento] = useState("")

    const handleFocusedComplemento = () => {
        setFocusComplemento(true)
    }
    const handleNotFocusedComplemento = () => {
        if(valueComplemento.trim() == ""){
            setFocusComplemento(false)
        }
        else{
            setFocusComplemento(true)
        }
    }
    //complemento
    const [focusNumRes, setFocusNumRes] = useState(false)
    const [valueNumRes, setValueNumRes] = useState("")

    const handleFocusedNumRes = () => {
        setFocusNumRes(true)
    }
    const handleNotFocusedNumRes = () => {
        if(valueNumRes.trim() == ""){
            setFocusNumRes(false)
        }
        else{
            setFocusNumRes(true)
        }
    }

    //select box do centro de treinamento
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

    // ********************** verificação se todos os inputs estão com algum value **************************

    const [eventButton, setEventButton] = useState(false)

    const handleCheckEventButton = () => {
        if(valueNome.trim() != "" && valueDate.trim() != "" && valueCity.trim() != "" && valueBairro.trim() != "" && valueRua.trim() != "" && valueComplemento.trim() != "" && valueNumRes.trim() != "" && valueSelectBox != ""){
            setEventButton(true)
            setMsgInputs(false)
        }
        else{
            setEventButton(false)
            setMsgInputs(true)
        }
    }

    // ********************** verificação se todos os inputs estão com algum value **************************

    const [msgInputs, setMsgInputs] = useState(false)

    return(
        <div onMouseMove={handleCheckEventButton} className="page-cadaster">
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
                                    onChange={(e) => setValueDate(e.target.value)}
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
                                <label className={focusNomeResp ? "labelFocusedNomeResp" : "labelNotFocusedNomeResp"} htmlFor='nomeResp'>Nome completo do responsável (não obrigatório)</label>
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
                                <label className={focusCity ? "labelFocusedCity" : "labelNotFocusedCity"} htmlFor='city'>Cidade</label>
                                <MyInput
                                    id="city"
                                    onChange={(e) => setValueCity(e.target.value)}
                                    onFocus={handleFocusedCity}
                                    onBlur={handleNotFocusedCity}
                                    className={focusCity ? "focusedCity" : "notFocusedCity"}
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
                                <label className={focusBairro ? "labelFocusedBairro" : "labelNotFocusedBairro"} htmlFor='bairro'>Bairro</label>
                                <MyInput
                                    id="bairro"
                                    onChange={(e) => setValueBairro(e.target.value)}
                                    onFocus={handleFocusedBairro}
                                    onBlur={handleNotFocusedBairro}
                                    className={focusBairro ? "Bairro" : "notFocusedBairro"}
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
                                <label className={focusRua ? "labelFocusedRua" : "labelNotFocusedRua"} htmlFor='rua'>Rua</label>
                                <MyInput
                                    id="rua"
                                    onChange={(e) => setValueRua(e.target.value)}
                                    onFocus={handleFocusedRua}
                                    onBlur={handleNotFocusedRua}
                                    className={focusRua ? "focusedRua" : "notFocusedRua"}
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
                                    <label className={focusComplemento ? "labelFocusedComplemento" : "labelNotFocusedComplemento"} htmlFor='complemento'>Complemento</label>
                                    <MyInput
                                        id="complemento"
                                        onChange={(e) => setValueComplemento(e.target.value)}
                                        onFocus={handleFocusedComplemento}
                                        onBlur={handleNotFocusedComplemento}
                                        className={focusComplemento ? "focusedComplemento" : "notFocusedComplemento"}
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
                                        ph={focusComplemento ? "Ex: Casa, apartamento..." : ""}
                                    />
                                    <img src={complementICON}></img>
                                </div>

                                <div className="button-label-container-num">
                                    <div className="complemento"></div>
                                    <label className={focusNumRes ? "labelFocusedNumRes" : "labelNotFocusedNumRes"} htmlFor='numRes'>N°</label>
                                    <MyInput
                                        id="numRes"
                                        onChange={(e) => setValueNumRes(e.target.value)}
                                        onFocus={handleFocusedNumRes}
                                        onBlur={handleNotFocusedNumRes}
                                        className={focusNumRes ? "focusedNumRes" : "notFocusedNumRes"}
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

                            <div className="button-label-container">
                                <MyButton
                                    width= "45%"
                                    height= "8vh"
                                    padding="1vh"
                                    cursor={eventButton ? "pointer" : ""}
                                    fontSize= "2.5vh"
                                    fontWeight= "bold"
                                    backgroundColor={eventButton ? "rgba(0, 255, 0, 0.4)": "rgba(255, 0, 0, 0.4)"}
                                    border= ".3vh black solid"
                                    borderBottom= ".3vh black solid"
                                    borderRadius=".6vh"
                                    transition= ".3s"
                                    children="Enviar"
                                    enter={eventButton ? "rgba(0, 255, 0, 0.4)": "rgba(255, 0, 0, 0.4)"}
                                    leave={eventButton ? "rgba(0, 255, 0, 0.3)": "rgba(255, 0, 0, 0.4)"}
                                />
                                <div className={msgInputs ? "msg-button-enviar-appear" : "msg-button-enviar" }>
                                    <span>Preencha os campos acima.</span>
                                </div>
                            </div>
                            

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