import './Instrutores.css'
import DionatanIMG from '../assets/FotoDionatan.png'
import RicardoIMG from '../assets/FotoRicardo.png'
import DanielIMG from '../assets/Daniel.jpg'
import DiegoIMG from '../assets/DiegoGBI.jpeg'
import instaLOGO from '../assets/instagram.svg'
import faceLOGO from '../assets/facebook.svg'
import youtubeLOGO from '../assets/youtube.svg'

interface Props{
    id?: string;
}


const Instrutores = ({id}: Props) => {

  return (
    <div id={id} className="content">

        <div className="box">
            <div className="box-img">
                <img className='Daniel' src={DanielIMG} alt='foto tal'></img>
            </div>
            <div className="box-info">
                <span>Daniel Bruno da Silva Ramos</span>
                <p className='desc-breve'>Faixa Preta de Jiu Jitsu, instrutor certificado pela Gracie Barra BJJ e curso de primeiros socorros básico.</p>
                <p className='desc-instrutor'>Professor responsável pela Gracie Barra Campo Mourão, Presidente da Associação Mourãoense de Jiu Jitsu, Professor responsável pelo PSC, com vários títulos em Campeonatos de Jiu jitsu do Rio de Janeiro, Paraná e Brasileiros com e sem quimono.</p>
                <div className="redes-sociais-instrutor">
                    <a target='_blank' href='https://www.instagram.com/danielramosjj/'><img src={instaLOGO}></img></a> 
                    <a target='_blank' href='https://www.youtube.com/@danielramosbjj8333'><img src={youtubeLOGO}></img></a> 
                    <a target='_blank' href='https://www.facebook.com/daniel.jjvp'><img src={faceLOGO}></img></a> 
                </div>
            </div>
             
        </div>

        <div className="box">
            <div className="box-img">
                <img className='ricardo' src={RicardoIMG} alt='foto tal'></img>
            </div>
            <div className="box-info">
                <span>Ricardo Maciel Batista</span>
                <p className='desc-breve' >Faixa Preta de Jiu Jitsu, Faixa azul de Judô, com Bacharelado e Licenciatura em Educação Física</p>
                <p className='desc-instrutor'>Professor e coordenador do PSC, instrutor certificado pela Gracie Barra BJJ, Multiplicador institucional de Atendimento Pré-Hospitalar (APH) Tático pela Polícia Militar do Parana, APH/MARC 1 pela Polícia Civil do Paraná e Polícia Rodoviária Federal, técnico auxiliar de Wrestlling.</p>
                <div className="redes-sociais-instrutor">
                    <a target='_blank' href='https://www.instagram.com/rmbradock/'><img src={instaLOGO}></img></a> 
                    <a target='_blank' href='https://www.youtube.com/@ricardobatista5534'><img src={youtubeLOGO}></img></a> 
                    <a target='_blank' href='https://www.facebook.com/rm.bradock'><img src={faceLOGO}></img></a> 
                </div>

            </div>
        </div>

        <div className="box">
            <div className="box-img">
                <img className='dionata' src={DionatanIMG} alt='foto tal'></img>
            </div>
            <div className="box-info">
                <span>Dionata da Silva Benedito</span>
                <p className='desc-breve' > Faixa Marrom de Jiu Jitsu, Faixa laranja de Judô, instrutor certificado pela Gracie Barra BJJ e curso de primeiros socorros básico.</p>
                <p className="desc-instrutor">Acadêmico do curso de Bacharelado em Educação Física, massoterapeuta, Campeão Paranaense de Jiu jitsu, competidor de Judô e técnico de Wrestlling.</p>
                <div className="redes-sociais-instrutor">
                    <a target='_blank' href='https://www.instagram.com/dionatadioh/'><img src={instaLOGO}></img></a> 
                    <a target='_blank' href='https://www.facebook.com/dioh.silva.9'><img src={faceLOGO}></img></a> 
                </div>
            </div>
        </div>
        <div className="box">
            <div className="box-img">
                <img className='Diego' src={DiegoIMG} alt='foto tal'></img>
            </div>
            <div className="box-info">
                <span>Diego Antonio de Oliveira Ribeiro</span>
                <p className='desc-breve' > Faixa Roxa de Jiu Jitsu, Faixa preta de Karatê, árbitro  de Karatê pela AKSD, instrutor certificado pela Gracie Barra BJJ e curso de primeiros socorros básico.</p>
                <p className="desc-instrutor">Graduação em História, Letras inglês, Letras espanhol, Letras e Literaturas de língua portuguesa, Sociologia, Ciências Biológicas, Ciências Contábeis, Gestâo pública e Educação física, bacharelado em Fisioterapia, especialista em Educação física adaptada e Educação física e Atletismo.</p>
                <div className="redes-sociais-instrutor">
                    <a target='_blank' href='https://www.instagram.com/diego_bjj_star/'><img src={instaLOGO}></img></a> 
                    <a target='_blank' href='https://www.facebook.com/diego.oliveira.182'><img src={faceLOGO}></img></a> 
                </div>
          </div>
        </div>
    </div>
  )
}

export default Instrutores