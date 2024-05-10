import { useState } from "react"
import './login.css'
import MyInput from "../components/MyInput"
import LogoSemeandoCampeoes from "../assets/LogoSemeandoCampeoes.png"
import MyButton from "../components/MyButton"
import blockICON from '../assets/lockIcon.svg'
import userICON from '../assets/userIconLogin.svg'
import designLogin from '../assets/designForLogin.svg'
import stickmanLogin from '../assets/vetor-JiuJitsu-fight.png'
import stickmanLogin2 from '../assets/vetor-JiuJitsu-fight-2.png'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import axios from "axios"

function Login (){

     // alterações na parte de Login do aluno
    const [loginModeAluno, setLoginModeAluno] = useState(false)
    const [boxModeAluno, setBoxModeAluno] = useState(false)
    const [mensageAluno, setMensageAluno] = useState("")
    const [userAluno, setUserAluno] = useState("")
    const [passwordAluno, setPasswordAluno] = useState("")
    const [focusUserAluno, setFocusUserAluno] = useState(false)
    const [focusPassWAluno, setFocusPassWAluno] = useState(false)
    const [clasnameAluno, setClassnameAluno] = useState(true)



    const handleMensageShowedAluno = () => {
        setBoxModeAluno(true)
        if(userAluno == "Lucas" && passwordAluno == "123"){
            setLoginModeAluno(true)
            setMensageAluno(`Seja bem vindo, ${userAluno}`)
            
            setTimeout(() => {
                setOverlay(true)
                setUserAluno("")
                setPasswordAluno("")
                setTimeout(()=>{
                    window.location.href = '/login/informações-acessoAluno'
                },1500)
            }, 2000)
        }
        else{
            setLoginModeAluno(false)
            setMensageAluno(`Nome de usuário ou senha incorreto.`)
            setUserAluno("")
            setPasswordAluno("")
            setFocusUserAluno(false)
            setFocusPassWAluno(false)

            setClassnameAluno(false)

            setTimeout(() => {
                setClassnameAluno(true)
            }, 2000)
        }

        if(boxModeAluno){
            setBoxModeAluno(true)
        }
        else{
        setTimeout(() => {
            setBoxModeAluno(false)
        }, 2000)
        }
    }

    const handleFocusUserAluno = () => {
        setFocusUserAluno(true)
    }
    const handleNotFocusUserAluno = () => {
        if(userAluno.trim() != ""){
            setFocusUserAluno(true)
        }
        else(
            setFocusUserAluno(false)   
        )
    }

    const handleFocusPassWAluno = () => {
        setFocusPassWAluno(true)
    }
    const handleNotFocusPassWAluno = () => {
        if(passwordAluno.trim() != ""){
            setFocusPassWAluno(true)
        }
        else(
            setFocusPassWAluno(false)
        )
    }

    // alterações na parte de Login do professor
    const [loginModeProfessor, setLoginModeProfessor] = useState(false)
    const [boxModeProfessor, setBoxModeProfessor] = useState(false)
    const [mensageProfessor, setMensageProfessor] = useState("")
    const [userProfessor, setUserProfessor] = useState("")
    const [passwordProfessor, setPasswordProfessor] = useState("")
    const [focusUserProfessor, setFocusUserProfessor] = useState(false)
    const [focusPassWProfessor, setFocusPassWProfessor] = useState(false)
    const [clasnameProfessor, setClassnameProfessor] = useState(true)

    const handleMensageShowedProfessor = async () => {
        setBoxModeProfessor(true)
        const validation = await axios.post("http://localhost:8080/users/auth",{usuario: userProfessor, senha: passwordProfessor})
        
        if(validation.status == 200){
            setLoginModeProfessor(true)
            setMensageProfessor(`Seja bem vindo, ${userProfessor}`)
            
            setTimeout(() => {
                setOverlay(true)
                setUserProfessor("")
                setPasswordProfessor("")
                setTimeout(()=>{
                    window.location.href = '/login/informações-acessoProfessor'
        
                },1500)
            }, 2000)
        }
        else{
            setLoginModeProfessor(false)
            setMensageProfessor(`Nome de usuário ou senha incorreto.`)
            setUserProfessor("")
            setPasswordProfessor("")
            setFocusUserProfessor(false)
            setFocusPassWProfessor(false)
            setClassnameProfessor(false)
            setTimeout(() => {
                setClassnameProfessor(true)
            }, 2000)
        }
        console.log(validation)
        if(boxModeProfessor){
            setBoxModeProfessor(true)
        }
        else{
            setTimeout(() => {
                setBoxModeProfessor(false)
            }, 2000)
        }
    }

    const handleFocusUserProfessor = () => {
        setFocusUserProfessor(true)
    }
    const handleNotFocusUserProfessor = () => {
        if(userProfessor.trim() != ""){
            setFocusUserProfessor(true)
        }
        else(
            setFocusUserProfessor(false)   
        )
    }

    const handleFocusPassWProfessor = () => {
        setFocusPassWProfessor(true)
    }
    const handleNotFocusPassWProfessor = () => {
        if(passwordProfessor.trim() != ""){
            setFocusPassWProfessor(true)
        }
        else(
            setFocusPassWProfessor(false)
        )
    }

    
    // center da página (alteração de container-login)
    
    const [activeLogin, setActiveLogin] = useState(true)
    const handleOnClickSouAluno = () =>{
        setActiveLogin(true)
    }

    const handleOnClickSouProfessor = () =>{
        setActiveLogin(false)
    }

    const [mouseOnProf, setMouseOnProf] = useState(false)
    const handleOnEnterLoginCenterProf = () => {
        setMouseOnProf(true)
    }
    const handleOnLeaveLoginCenterProf = () => {
        setMouseOnProf(false)
    }
    
    const [mouseOnAluno, setMouseOnAluno] = useState(false)
    const handleOnEnterLoginCenterAluno = () => {
        setMouseOnAluno(true)
    }
    const handleOnLeaveLoginCenterAluno = () => {
        setMouseOnAluno(false)
    }

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

    const handleOnClickParticipe = () => {
        setOverlay(true)
    
        setTimeout(() => {
            window.location.href = '/participe'
        }, 1500)

        setTimeout(() => {
            setOverlay(false)
        }, 2000)
    }

return (
    <>
    <div className="page-login">
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

        <div className="container-login">
            <div style={{pointerEvents: activeLogin ? "none" : "all", filter: activeLogin ? "grayscale(100%)" : "grayscale(0%)", opacity: activeLogin ? ".2" : "1", transition: "1s"}} className="login-professores">
                <img className="design-type-wifi-top" src={designLogin}></img>
                <img className="design-type-wifi-bottom" src={designLogin}></img>
                <span>Professor</span>

                <div className="user-box-professor">
                    <label className={focusUserProfessor ? "focusOn" : "focusOff"} htmlFor="userProfessor">Nome de usuário</label>
                    <MyInput
                        className={clasnameProfessor ? "" : "loginFail-professor"}
                        id="userProfessor"
                        onChange={(e) => setUserProfessor(e.target.value)}
                        onFocus={handleFocusUserProfessor}
                        onBlur={handleNotFocusUserProfessor}
                        value={userProfessor}
                        type='text'
                        width= "85%"
                        height= "100%"
                        fontSize= "2.4vh"
                        fontWeight= "500"
                        border= {loginModeProfessor ? "solid .3vh rgba(0, 255, 0, .7)" : "solid .3vh black"}
                        borderBottom= ".3vh black solid"
                        borderRadius="1vh"
                        padding="0vh 7vh 0vh 2vh"
                        transition= ".3s"
                        background-color= "transparent"
                    />
                        <img src={userICON}></img>
                </div>
                
                <div className="user-box-professor">
                <label className={focusPassWProfessor ? "focusOn" : "focusOff"} htmlFor="passwordProf">Senha</label>
                    <MyInput
                        className={clasnameProfessor ? "" : "loginFail-professor"}
                        id="passwordProf"
                        onChange={(e) => setPasswordProfessor(e.target.value)}
                        onFocus={handleFocusPassWProfessor}
                        onBlur={handleNotFocusPassWProfessor}
                        value={passwordProfessor}
                        type='password'
                        width= "85%"
                        height= "100%"
                        fontSize= "2.4vh"
                        fontWeight= "500"
                        border= {loginModeProfessor ? "solid .3vh rgba(0, 255, 0, .7)" : "solid .3vh black"}
                        borderBottom= ".3vh black solid"
                        borderRadius="1vh"
                        padding="0vh 7vh 0vh 2vh"
                        transition= ".3s"
                        backgroundColor= "transparent"
                    />
                    <img src={blockICON}></img>
                </div>

                    <MyButton
                        onClick={handleMensageShowedProfessor}
                        width= "45%"
                        height= "8%"
                        padding="1vh"
                        cursor= "pointer"
                        fontSize= "2.5vh"
                        fontWeight= "bold"
                        backgroundColor= "transparent"
                        border= ".3vh black solid"
                        borderBottom= ".3vh black solid"
                        borderRadius="1vh"
                        transition= ".3s"
                        children="Enviar"
                        enter="rgba(0, 0, 0, 0.2)"
                        leave="rgba(0, 0, 0, 0.3)"
                    />
                    <div  style={{transform: boxModeProfessor ? "translateY(-2vh)" : "translateY(10vh)", transition: ".8s"}} className={loginModeProfessor ? "mensage-submit-correct-professor" : "mensage-submit-incorrect-professor"}>
                    <span className="submit-msg-professor">
                        {mensageProfessor}
                    </span>
                </div>
            </div>




            <div className="center-login-page">

                <div className="top">
                    <div className="container-change-button">
                        <div onClick={handleOnClickSouProfessor} onMouseEnter={handleOnEnterLoginCenterProf} onMouseLeave={handleOnLeaveLoginCenterProf} style={{cursor: "pointer", transform: mouseOnProf ? "scale(1.03)" : "scale(1.0)"}} className="left">
                            <span style={{color: activeLogin ? "black" : "white", transition: "1s"}} >Sou professor</span>
                        </div>

                        <div onClick={handleOnClickSouAluno} onMouseEnter={handleOnEnterLoginCenterAluno} onMouseLeave={handleOnLeaveLoginCenterAluno} style={{cursor: "pointer", transform: mouseOnAluno ? "scale(1.03)" : "scale(1.0)"}} className="right">
                            <span style={{color: activeLogin ? "white" : "black", transition: "1s"}}>Sou aluno</span>
                        </div>
                        
                        <div style={{transform: activeLogin ? "translateX(12vh)" : "translateX(-11.5vh)", transition: ".6s ease-in-out"}} id="change-circle" className="change-circle">
                        </div>
                    </div>
                    <div className="redirect-login">
                    <span className='question'>Não é aluno?<a onClick={handleOnClickParticipe} >Faça parte!</a></span>
                </div>
                </div>

                <div className="bottom">
                    <div className="container-stickman">
                        <img style={{opacity: activeLogin ? "1" : "0" , transition: "1s"}} src={stickmanLogin}></img>
                        <img style={{opacity: activeLogin ? "0" : "1", transition: "1s"}} src={stickmanLogin2}></img>
                    </div>
                </div>
            </div>




            <div style={{pointerEvents: activeLogin ? "all" : "none", filter: activeLogin ? "grayscale(0%)" : "grayscale(100%)", opacity: activeLogin ? "1" : ".2", transition: "1s"}} className="login-alunos">
                    <img className="design-type-wifi-top" src={designLogin}></img>
                    <img className="design-type-wifi-bottom" src={designLogin}></img>
                    <span>Aluno</span>

                <div className="user-box-aluno">
                    <label className={focusUserAluno ? "focusOn" : "focusOff"} htmlFor="userAluno">Nome de usuário</label>
                    <MyInput
                        className={clasnameAluno ? "" : "loginFail-aluno"}
                        id="userAluno"
                        onChange={(e) => setUserAluno(e.target.value)}
                        onFocus={handleFocusUserAluno}
                        onBlur={handleNotFocusUserAluno}
                        value={userAluno}
                        type='text'
                        width= "85%"
                        height= "100%"
                        fontSize= "2.4vh"
                        fontWeight= "500"
                        border= {loginModeAluno ? "solid .3vh rgba(0, 255, 0, .7)" : "solid .3vh black"}
                        borderBottom= ".3vh black solid"
                        borderRadius="1vh"
                        padding="0vh 7vh 0vh 2vh"
                        transition= ".3s"
                        backgroundColor= "transparent"
                    />
                        <img src={userICON}></img>
                </div>
                
                <div className="password-box-aluno">
                <label className={focusPassWAluno ? "focusOn" : "focusOff"} htmlFor="passwordAluno">Senha</label>
                    <MyInput
                        className={clasnameAluno ? "" : "loginFail-aluno"}
                        id="passwordAluno"
                        onChange={(e) => setPasswordAluno(e.target.value)}
                        onFocus={handleFocusPassWAluno}
                        onBlur={handleNotFocusPassWAluno}
                        value={passwordAluno}
                        type='password'
                        width= "85%"
                        height= "100%"
                        fontSize= "2.4vh"
                        fontWeight= "500"
                        border= {loginModeAluno ? "solid .3vh rgba(0, 255, 0, .7)" : "solid .3vh black"}
                        borderBottom= ".3vh black solid"
                        borderRadius="1vh"
                        padding="0vh 7vh 0vh 2vh"
                        transition= ".3s"
                        backgroundColor= "transparent"
                    />
                    <img src={blockICON}></img>
                </div>

                    <MyButton
                        onClick={handleMensageShowedAluno}
                        width= "45%"
                        height= "8%"
                        padding="1vh"
                        cursor= "pointer"
                        fontSize= "2.5vh"
                        fontWeight= "bold"
                        backgroundColor= "transparent"
                        border= ".3vh black solid"
                        borderBottom= ".3vh black solid"
                        borderRadius="1vh"
                        transition= ".3s"
                        children="Enviar"
                        enter="rgba(0, 0, 0, 0.2)"
                        leave="rgba(0, 0, 0, 0.3)"
                    />
                <div  style={{transform: boxModeAluno ? "translateY(-2vh)" : "translateY(10vh)", transition: ".8s"}} className={loginModeAluno ? "mensage-submit-correct-aluno" : "mensage-submit-incorrect-aluno"}>
                    <span className="submit-msg-aluno">
                        {mensageAluno}
                    </span>
                </div>
            </div>
        </div>
    </div>
    </>
)
}
export default Login