import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import PrefetuiraLogo from '../assets/Logo-CM-Prefeitura.png'
import './Footes.css'

const Footer = () => {
  return (
    <footer>
        <div className='content-footer'>
          <div className="sa-box">
                <img className='prefeitura-img' src={PrefetuiraLogo} alt='logo Prefeitura de Campo Mourão'></img>
          </div>
            <div className="icon">
                <img src={LogoSemeandoCampeoes} alt='logo Semeando Campeões'></img>
            </div>
            <div className="text">
            <div>
                <span>Semeando Campeões</span>
            </div>
            <div className='copy'>
            Copyright © 2024 Lucas Grander & Ricardo M. Batista.
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer