import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import MyInput from "../components/MyInput";
import LogoSemeandoCampeoes from "../assets/LogoSemeandoCampeoes.png";
import './login.css'
import MyButton from "../components/MyButton";
import blockICON from '../assets/lockIcon.svg'
import userICON from '../assets/userIconLogin.svg'
import designLogin from '../assets/designForLogin.svg'
import stickmanLogin from '../assets/JiuJitsuStickman.svg'

function Login (){

    // alterações na parte de Login do professor
    const [userProf, setUserProf] = useState("")
    const [passwordProf, setPasswordProf] = useState("")
    const [focusUserProf, setFocusUserProf] = useState(false)
    const [focusPassWProf, setFocusPassWProf] = useState(false)

    const handleFocusUserProf = () => {
        setFocusUserProf(true)
    }
    const handleNotFocusUserProf = () => {
        if(userProf.trim() != ""){
            setFocusUserProf(true)
        }
        else(
            setFocusUserProf(false)
        )
    }

    const handleFocusPassWProf = () => {
        setFocusPassWProf(true)
    }
    const handleNotFocusPassWProf = () => {
        if(passwordProf.trim() != ""){
            setFocusPassWProf(true)
        }
        else(
            setFocusPassWProf(false)
        )
    }

     // alterações na parte de Login do aluno
    const [userAluno, setUserAluno] = useState("")
    const [passwordAluno, setPasswordAluno] = useState("")
    const [focusUserAluno, setFocusUserAluno] = useState(false)
    const [focusPassWAluno, setFocusPassWAluno] = useState(false)

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
    const [activeLogin, setActiveLogin] = useState(true)

    const handleOnClickSouProfessor = () =>{
        setActiveLogin(false)
    }

    const handleOnClickSouAluno = () =>{
        setActiveLogin(true)
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

return (
    <>
    <div className="page-login">
        <header>
            <div className="logo">
                <a href='/'><img src={LogoSemeandoCampeoes} alt="Logo Semeando Campeões"></img></a>
            </div>
            <div className="title">
                <h1>Semeando Campeões</h1>
            </div>
        </header>

        <div className="container-login">
            <div style={{pointerEvents: activeLogin ? "none" : "all", filter: activeLogin ? "grayscale(100%)" : "grayscale(0%)", opacity: activeLogin ? ".4" : "1", transition: "1s"}} className="login-professores">
                <img className="design-type-wifi-top" src={designLogin}></img>
                <img className="design-type-wifi-bottom" src={designLogin}></img>
                <span>Professor</span>

                <div className="user-box-professor">
                    <label className={focusUserProf ? "focusOn" : "focusOff"} htmlFor="userProfessor">Nome de usuário</label>
                    <MyInput
                        id="userProfessor"
                        onChange={(e) => setUserProf(e.target.value)}
                        onFocus={handleFocusUserProf}
                        onBlur={handleNotFocusUserProf}
                        type='text'
                        width= "85%"
                        height= "100%"
                        fontSize= "2.4vh"
                        fontWeight= "500"
                        border= "solid .3vh black"
                        borderBottom= ".3vh black solid"
                        borderRadius=".6vh"
                        padding="0vh 7vh 0vh 2vh"
                        transition= ".3s"
                        background-color= "transparent"
                    />
                        <img src={userICON}></img>
                </div>
                
                <div className="user-box-professor">
                <label className={focusPassWProf ? "focusOn" : "focusOff"} htmlFor="passwordProf">Senha</label>
                    <MyInput
                        id="passwordProf"
                        onChange={(e) => setPasswordProf(e.target.value)}
                        onFocus={handleFocusPassWProf}
                        onBlur={handleNotFocusPassWProf}
                        type='text'
                        width= "85%"
                        height= "100%"
                        fontSize= "2.4vh"
                        fontWeight= "500"
                        border= "solid .3vh black"
                        borderBottom= ".3vh black solid"
                        borderRadius=".6vh"
                        padding="0vh 7vh 0vh 2vh"
                        transition= ".3s"
                        background-color= "transparent"
                    />
                    <img src={blockICON}></img>
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
            </div>




            <div className="center-login-page">

                <div className="top">
                    <div className="container-change-button">
                        <div onMouseEnter={handleOnEnterLoginCenterProf} onMouseLeave={handleOnLeaveLoginCenterProf} style={{cursor: "pointer", transform: mouseOnProf ? "scale(1.03)" : "scale(1.0)"}} className="left">
                            <span onClick={handleOnClickSouProfessor}>Sou professor</span>
                        </div>

                        <div onMouseEnter={handleOnEnterLoginCenterAluno} onMouseLeave={handleOnLeaveLoginCenterAluno} style={{cursor: "pointer", transform: mouseOnAluno ? "scale(1.03)" : "scale(1.0)"}} className="right">
                            <span onClick={handleOnClickSouAluno}>Sou aluno</span>
                        </div>
                        
                        <div style={{transform: activeLogin ? "translateX(12vh)" : "translateX(-11.5vh)", transition: ".6s ease-in-out"}} id="change-circle" className="change-circle">
                        </div>
                    </div>
                    <div className="redirect-login">
                    <span className='question'>Não é aluno?<a href='/participe'>Faça parte!</a></span>
                </div>
                </div>

                <div className="bottom">
                    <div className="conainer-stickman">
                        <img src={stickmanLogin}></img>
                    </div>
                </div>
            </div>




            <div style={{pointerEvents: activeLogin ? "all" : "none", filter: activeLogin ? "grayscale(0%)" : "grayscale(100%)", opacity: activeLogin ? "1" : ".4", transition: "1s"}} className="login-alunos">
                <img className="design-type-wifi-top" src={designLogin}></img>
                <img className="design-type-wifi-bottom" src={designLogin}></img>
                <span>Aluno</span>

                <div className="user-box-aluno">
                    <label className={focusUserAluno ? "focusOn" : "focusOff"} htmlFor="userAluno">Nome de usuário</label>
                    <MyInput
                        id="userAluno"
                        onChange={(e) => setUserAluno(e.target.value)}
                        onFocus={handleFocusUserAluno}
                        onBlur={handleNotFocusUserAluno}
                        type='text'
                        width= "85%"
                        height= "100%"
                        fontSize= "2.4vh"
                        fontWeight= "500"
                        border= "solid .3vh black"
                        borderBottom= ".3vh black solid"
                        borderRadius=".6vh"
                        padding="0vh 7vh 0vh 2vh"
                        transition= ".3s"
                        backgroundColor= "transparent"
                    />
                        <img src={userICON}></img>
                </div>
                
                <div className="password-box-aluno">
                <label className={focusPassWAluno ? "focusOn" : "focusOff"} htmlFor="passwordAluno">Senha</label>
                    <MyInput
                        id="passwordAluno"
                        onChange={(e) => setPasswordAluno(e.target.value)}
                        onFocus={handleFocusPassWAluno}
                        onBlur={handleNotFocusPassWAluno}
                        type='text'
                        width= "85%"
                        height= "100%"
                        fontSize= "2.4vh"
                        fontWeight= "500"
                        border= "solid .3vh black"
                        borderBottom= ".3vh black solid"
                        borderRadius=".6vh"
                        padding="0vh 7vh 0vh 2vh"
                        transition= ".3s"
                        backgroundColor= "transparent"
                    />
                    <img src={blockICON}></img>
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
            </div>
        </div>
    </div>
    </>

)
}
export default Login