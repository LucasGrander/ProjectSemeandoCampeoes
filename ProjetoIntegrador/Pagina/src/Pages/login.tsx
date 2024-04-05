import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import MyInput from "../components/MyInput";
import LogoSemeandoCampeoes from "../assets/LogoSemeandoCampeoes.png";
import './login.css'
import MyButton from "../components/MyButton";
import blockICON from '../assets/lockIcon.svg'
import userICON from '../assets/userIconLogin.svg'
import designLogin from '../assets/designForLogin.svg'

function Login (){

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [focusUser, setFocusUser] = useState(false)
    const [focusPassW, setFocusPassW] = useState(false)

    const handleFocusUser = () => {
        setFocusUser(true)
    }
    const handleNotFocusUser = () => {
        if(user.trim() != ""){
            setFocusUser(true)
        }
        else(
            setFocusUser(false)
        )
    }

    const handleFocusPassW = () => {
        setFocusPassW(true)
    }
    const handleNotFocusPassW = () => {
        if(password.trim() != ""){
            setFocusPassW(true)
        }
        else(
            setFocusPassW(false)
        )
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
            <div className="login-professores">
                <img className="design-type-wifi-top" src={designLogin}></img>
                <img className="design-type-wifi-bottom" src={designLogin}></img>
                <span>Professor</span>

                <div className="user-box-professor">
                    <label className={focusUser ? "focusOn" : "focusOff"} htmlFor="userProfessor">Nome de usuário</label>
                    <MyInput
                        id="userProfessor"
                        onChange={(e) => setUser(e.target.value)}
                        onFocus={handleFocusUser}
                        onBlur={handleNotFocusUser}
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
                <label className={focusPassW ? "focusOn" : "focusOff"} htmlFor="passwordProf">Senha</label>
                    <MyInput
                        id="passwordProf"
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={handleFocusPassW}
                        onBlur={handleNotFocusPassW}
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
    <span>Professor</span>

                <div className="user-box-professor">
                    <input id="userProfessor" type="text" />
                    <label htmlFor="userProfessor">Nome de usuário</label>
                </div>
                
                <div className="password-box-professor">
                    <input id="passwordProf" type="password" />
                    <label htmlFor="passwordProf">Senha</label>
                </div>

                <button>Entrar</button>
            </div>

            <div className="login-alunos">
            <span>Professor</span>

                <div className="user-box-aluno">
                    <input id="userAlunor" type="text" />
                    <label htmlFor="userAluno">Nome de usuário</label>
                </div>

                <div className="password-box-aluno">
                    <input id="passwordAluno" type="password" />
                    <label htmlFor="passwordAluno">Senha</label>
                </div>

                <button>Entrar</button>
            </div>
        </div>
    </div>
    </>

)
}
export default Login