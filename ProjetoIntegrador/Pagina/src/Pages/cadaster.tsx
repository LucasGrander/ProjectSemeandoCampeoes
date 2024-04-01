import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import MyInput from '../components/MyInput'
import './cadaster.css'
const Cadaster = () => {

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
            <div className="container-cadaster">
                <div className="content-cadaster">
                    <span>Faça parte</span>

                    <div className="button-label-container">
                        <label htmlFor='nome' >Nome</label>
                        <MyInput
                            type='text'
                            width= "80%"
                            height= "100%"
                            padding="2vh"
                            fontSize= "1.9vh"
                            border= "solid 1px black"
                            borderRadius='.9vh'
                            background-color= "transparent"
                            transition= ".4s"
                            enter= "#f0f0f0"
                            leave= "transparent"
                        />
                    </div>

                    <div className="button-label-container">
                    <MyInput
                            type='date'
                            width= "80%"
                            height= "100%"
                            padding="2vh"
                            fontSize= "1.9vh"
                            border= "solid 1px black"
                            borderRadius='.9vh'
                            background-color= "transparent"
                            transition= ".4s"
                            enter= "#f0f0f0"
                            leave= "transparent"
                        />
                    </div>

                    <div className="button-label-container">
                        <label htmlFor='nomeResp' >Nome do responsável</label>
                        <MyInput
                            type='text'
                            width= "80%"
                            height= "100%"
                            padding="2vh"
                            fontSize= "1.9vh"
                            border= "solid 1px black"
                            borderRadius='.9vh'
                            background-color= "transparent"
                            transition= ".4s"
                            enter= "#f0f0f0"
                            leave= "transparent"
                        />
                    </div>

                    <div className="button-label-container">
                    <label htmlFor='nomeResp'>Telefone</label>
                        <MyInput
                            type='tel'
                            width= "80%"
                            height= "100%"
                            padding="2vh"
                            fontSize= "1.9vh"
                            border= "solid 1px black"
                            borderRadius='.9vh'
                            background-color= "transparent"
                            transition= ".4s"
                            enter= "#f0f0f0"
                            leave= "transparent"
                            />
                    </div>

                    <button>Registrar</button>
                </div>
            </div>
        </div>
    )
}

export default Cadaster