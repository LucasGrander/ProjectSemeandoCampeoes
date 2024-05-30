import './NewsLatter.css'
import Footer from '../components/Footer';
import { useState } from 'react';
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'


interface Props{
    id?: string;
}
const NewsLatter = ({id}: Props) => {

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

  return (
    <div id={id} className="content-history">
      <div style={{display: overlay? 'flex' : 'none' }} className="overlay">
            <img className='loading-top' src={overlayLoadingCircle}></img>
            <img className='loading-logo' src={LogoSemeandoCampeoes}></img>
      </div>
        <header>
            <div className="logo">
                <img onClick={handleOnClickHome} src={LogoSemeandoCampeoes} alt="Logo Semeando Campeões"></img>
            </div>
            <div className="title">
                <h1>Boletim Informativo BJJ CM</h1>
            </div>
        </header>
      
        <div className="box-history">
            <div className="text-history">
              
              <h2>Copa Noroeste de Judô</h2>
              Campo Mourão recebe neste final de semana, 25 e 26 de maio, a maior competição de judô da história do Paraná, o Campeonato Paranaense de Judô. O evento será realizado pela 
              Associação Mourãoense de Judô (AMJ), em parceria com a Prefeitura de Campo Mourão, por meio da Fundação de Esportes (FECAM) e a Federação Paranaense de Judô (FPRJ) e os 
              apoiadores do evento e do judô mourãoense de 2024.<br></br>
              As categorias sub-13, sub-15, sub-21 e veterano competem no sábado (25), das 8h às 18h, enquanto o Torneio Regional de Judô – 04 anos acima, será realizado no domingo (26), das 8h às 14h, 
              ambos no Ginásio de Esportes Belin Carolo, em anexo a Universidade Tecnológica Federal do Paraná (UFPR) – Campus de Campo Mourão.
              <h5>Mais informações: <a target='_blank'  href="https://resenhacm.com.br/campo-mourao-recebe-campeonato-paranaense-de-judo-neste-final-de-semana-no-ginasio-da-utfpr/">site resenha CM</a></h5> 
              
              <h5>Álbum de Fotografias - GOOGLE FOTOS <a target='_blank'  href="https://photos.app.goo.gl/GqvAzULfFH5pLWtH7">*Torneio Regional Noroeste*</a> - 26/05/2024 - Campo Mourão - Andrré Fedalto - Vitor Albres.</h5>
              <h5>Postagem 27/05/2024</h5>
                          
              <h2>Treinão solidário 2024</h2>
              Em 24/05/2024 as equipes PSC, Gracie Barra, Moraes BJJ (Norte) e Guedes BJJ (Clube feijão) se reuniram no Uchoa Dojô para realizar um treino solidário para arrecadação de ítens de higiene 
              pessoal para as vítimas da enxente no Rio Grande do Sul. Neste dia foram ministradas técnicas diversas pelos professores Daniel Ramos e João Guedes.

              <h5>Vídeo: <a target='_blank'  href="https://youtu.be/ydjqrB2vcwg?si=upTl7bcXO9DrBS6D">Treinão Solidário 2024</a></h5>
              <h5>Postagem 27/05/2024</h5>
              <br></br>


            </div>
        </div>
        <Footer />
          
    </div>
  )
}
export default NewsLatter