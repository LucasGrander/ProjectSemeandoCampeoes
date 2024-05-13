import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import PrefetuiraLogo from '../assets/Logo-CM-Prefeitura2.png'
import FecamLogo from '../assets/Logo-FECAM2.png'
import './Footer.css'
import Boloisa from '../assets/PBoloisa.jpeg'
import Cairo from '../assets/PCairo.jpeg'
import Fabri from '../assets/PFabri.jpeg'
import Glamour from '../assets/PGlamour.jpeg'
import JC from '../assets/PJc.jpeg'
import PIB from '../assets/PPib.jpeg'
import Plenitude from '../assets/PPlenitude.jpeg'
import Pousada from '../assets/PPousada.jpeg'
import Vanessa from '../assets/PVanessa.jpeg'

const Footer = () => {
  return (
    <footer>
        
        <div className='content-footer'>
          <div className="sa-box">
                <img className='prefeitura-img' src={PrefetuiraLogo} alt='logo Prefeitura de Campo Mourão'></img>
                <div className='texto'>
                <a><h6>Município de</h6></a>
                <a> <h5>Campo Mourão</h5></a>
                </div>
          </div>
            <div className="icon">
                <img src={LogoSemeandoCampeoes} alt='logo Semeando Campeões'></img>
            </div>
            <div className="text">
              <div>
                  <span>Semeando Campeões</span>
              </div>
              <div className='copy'>
                Todos os direitos reservados © 2024 Lucas Grander & Ricardo M. Batista.
              </div>
              </div>
            <div className="sb-box">
                <img className='fecam-img' src={FecamLogo} alt='logo Prefeitura de Campo Mourão'></img>
          </div>
        </div>
        <div className='box-patrocinios'>
          <span>PATROCÍNIOS</span>
          <div className='logo-patrocinios'>
            <img className='boloisa' src={Boloisa} alt='logo Boloisa Bolos'></img>
            <img className='cairo' src={Cairo} alt='logo Mecanica Cairo'></img>
            <img className='fabri' src={Fabri} alt='logo Fabri contabilidade'></img>
            <img className='glamour' src={Glamour} alt='logo Salão Glamour'></img>
            <img className='jc' src={JC} alt='logo JC alarmes'></img>
            <img className='pib' src={PIB} alt='logo Igreja Batista'></img>
            <img className='plenitude' src={Plenitude} alt='logo Plenitude Colchoes'></img>
            <img className='pousada' src={Pousada} alt='logo Pousada Parque das Gabirobas'></img>
            <img className='vanessa' src={Vanessa} alt='logo Vanessa Tapware'></img>
          </div>
        </div>
    </footer>
  )
}

export default Footer