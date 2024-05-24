import { useState } from 'react'
import './newslatter.css'
import DanielIMG from '../assets/Daniel.jpg'
import LogoInstagram from '../assets/instagram.svg'
import LogoFacebook from '../assets/facebook.svg'
import LogoYoutube from '../assets/youtube.svg'



interface Props{
    id?: string;
}


const NewsLatter = ({id}: Props) => {

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
                <a href="https://www.instagram.com/semeando.campeoes/" target="_blank" ><img src={LogoInstagram} alt="logo do instagram"></img></a>
                    <a href="https://www.facebook.com/semeandocampeoes/" target="_blank" ><img src={LogoFacebook} alt="logo do facebook"></img></a>
                    <a href="https://www.youtube.com/@semeandocampeoes7001" target="_blank" ><img className='youtube' src={LogoYoutube} alt="logo do youtube"></img></a>
                </div>
            </div>
             
        </div>
        
    </div>
  )
}

export default NewsLatter