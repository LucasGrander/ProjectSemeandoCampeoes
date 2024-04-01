import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
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
                    <input type="text" placeholder='Nome completo' />
                    <input type="date" placeholder='Data de nascimento' />
                    <input type="text" placeholder='Nome do responsável' />
                    <input type="tel" placeholder='Telefone' />
                    <button>Registrar</button>
                </div>
            </div>
        </div>
    )
}

export default Cadaster