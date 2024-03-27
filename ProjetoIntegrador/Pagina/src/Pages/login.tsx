import { ChangeEvent, useState } from "react";
// import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import Logo from "../assets/LogoSemeandoCampeoes.png";
import './login.css'

function Login (){
    const [user, setUser] = useState("");
    const [user2, setUser2] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [LoginFail, setLoginFail] = useState(false);

    const handleUserOnChange1 = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value)
    }
    const handlePasswordOnChange1 = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleUserOnChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        setUser2(e.target.value)
    }
    const handlePasswordOnChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.target.value)
    }
    const handleOnClick1 = () => {
        if(user === "Ricardo" && password === "1234"){
            alert ("seja bem vindo!");
            // navigate("/to-do-list");
        }else{
            setLoginFail(true);
            setUser("");
            setPassword("");
            alert("Usuário ou senha incorreto!");
            setLoginFail(false);
        }
    }
    const handleOnClick2 = () => {
        if(user2 === "Ricardo" && password2 === "1234"){
            alert ("seja bem vindo!");
            // navigate("/to-do-list");
        }else{
            setLoginFail(true);
            setUser2("");
            setPassword2("");
            alert("Usuário ou senha incorreto!");
            setLoginFail(false);
        }
    }

return (
    <>
        <div className="container">
            <div className="imagem">
                <img src={Logo} alt="Logo" className="logo"/>
            </div>
            <div className='Login'>
                <div className="Instrutores"><h1><a>INSTRUTORES</a></h1>
                    <MyInput 
                    type='text' 
                    placeHolder='Login'
                    bgColor="white" 
                    onChange={handleUserOnChange1}
                    value={LoginFail ? " " : user}
                    />
                    <MyInput 
                    type='Password' 
                    placeHolder='Senha' 
                    bgColor="white" 
                    onChange={handlePasswordOnChange1}
                    value={LoginFail ? " " : password}
                    />
                    <MyButton onClick={handleOnClick1}>Logar</MyButton>
                </div>
                <br></br>
                <div className="Alunos"><h1><a>ALUNOS</a></h1>
                    <MyInput 
                    type='text' 
                    placeHolder='Login'
                    bgColor="white" 
                    onChange={handleUserOnChange2}
                    value={LoginFail ? " " : user2}
                    />
                    <MyInput 
                    type='Password' 
                    placeHolder='Senha' 
                    bgColor="white" 
                    onChange={handlePasswordOnChange2}
                    value={LoginFail ? " " : password2}
                    />
                    <MyButton onClick={handleOnClick2}>Logar</MyButton>
                </div>    
            </div>
        </div>
    </>

)
}
export default Login