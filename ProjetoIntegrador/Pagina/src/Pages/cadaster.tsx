import {  useState } from 'react'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import MyInput from '../components/MyInput'
import './cadaster.css'
import Mancha from '../assets/mancha-background-cadaster.png'
import jiu1 from '../assets/jiu1-dePe.png'
import jiu2 from '../assets/jiu2-pernaAberta.png'
import jiu3 from '../assets/jiu3-kimono.png'
import jiu4 from '../assets/jiu5-luta.png'
import tel from '../assets/telephone.svg'
import responsavel from '../assets/responsavel.svg'
import username from '../assets/userNOME.svg'
import MyButton from '../components/MyButton'

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
//telefone focus
    const [focusTelefone, setFocusTelefone] = useState(false)

    const handleFocusedTelefone = () => {
        setFocusTelefone(true)
        
    }
    const handleNotFocusedTelefone = () => {
        if(valueTelefone.trim() == ""){
            setFocusTelefone(false)
        }
        else{
            setFocusTelefone(true)
        }
    }

    const [valueTelefone, setValueTelefone] = useState<string>('');

    function formatarTelefone(valueTelefone: string): string {
        const apenasDigitos = valueTelefone.replace(/\D/g, ''); // Remove all non-numeric characters
        const onlyNums = /^(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})$/; // Regex for a phone number with country code, area code, etc.

        if (onlyNums.test(apenasDigitos)) {
            const [, brasil, ddd, fixedNum, prefixe, sulfixe] = apenasDigitos.match(onlyNums)!;
            const telefoneFormatado = `+${brasil} (${ddd}) ${fixedNum} ${prefixe} - ${sulfixe}`;
            return telefoneFormatado;
        }
        return valueTelefone.replace(/\D/g, '')
    }

    const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const novoValorTelefone = event.target.value;
        const telefoneFormatado = formatarTelefone(novoValorTelefone);
        setValueTelefone(telefoneFormatado);
    };

    return(
        <div className="page-cadaster">
            
            <header>
                <div className="logo">
                    <a href='/'><img src={LogoSemeandoCampeoes} alt="Logo Semeando Campeões"></img></a>
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
                        <span>Cadastro</span>
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

                        <div className="button-label-container">
                        <label className={focusTelefone ? "labelFocusedTelefone" : "labelNotFocusedTelefone"} htmlFor='telefone'>Telefone</label>
                            <MyInput
                                id="telefone"
                                value={valueTelefone}
                                maxlenght={14}
                                onChange={handleTelefoneChange}
                                onFocus={handleFocusedTelefone}
                                onBlur={handleNotFocusedTelefone}
                                className={focusTelefone ? "focusedTelefone" : "notFocusedTelefone"}
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
                                <img src={tel}></img>
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
                        <span className='question'>Já é aluno?<a href='/login'>Entrar.</a></span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadaster