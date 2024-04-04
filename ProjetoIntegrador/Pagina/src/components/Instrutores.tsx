import './Instrutores.css'
import DionatanIMG from '../assets/FotoDionatan.png'
import RicardoIMG from '../assets/FotoRicardo.png'
import DanielIMG from '../assets/Daniel.jpg'

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
                <p className='desc-breve'>Faixa Preta de Jiu Jitsu, instrutor certificado pela Gracie Barra BJJ.</p>
                <p className='desc-instrutor'>Professor responsável pela Gracie Barra Campo Mourão, Presidente da Associação Mourãoense de Jiu Jitsu, Professor responsável pelo PSC, com vários títulos em Campeonatos de Jiu jitsu do Rio de Janeiro, Paraná e Brasileiros com e sem quimono.</p>
            </div>
        </div>

        <div className="box">
            <div className="box-img">
                <img className='ricardo' src={RicardoIMG} alt='foto tal'></img>
            </div>
            <div className="box-info">
                <span>Ricardo Maciel Batista</span>
                <p className='desc-breve' >Faixa Preta de Jiu Jitsu, Faixa azul de Judô, com Bacharelado e Licenciatura em Educação Física</p>
                <p className='desc-instrutor'>Instrutor certificado pela Gracie Barra BJJ, Multiplicador institucional de Atendimento Pré-Hospitalar (APH) Tático pela Polícia Militar do Parana, APH/MARC 1 pela Polícia Civil do Paraná e Polícia Rodoviária Federal.</p>
            </div>
        </div>

        <div className="box">
            <div className="box-img">
                <img className='dionata' src={DionatanIMG} alt='foto tal'></img>
            </div>
            <div className="box-info">
                <span>Dionata da Silva Benedito</span>
                <p className='desc-breve' > Faixa Marrom de Jiu Jitsu, Faixa laranja de Judô, instrutor certificado pela Gracie Barra BJJ e curso de primeiros socorros básico.</p>
                <p className="desc-instrutor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi libero laboriosam ipsum neque at, reprehenderit facere cum, harum, consequuntur iusto placeat omnis quis fugiat debitis. Beatae veniam repellendus architecto.</p>
            </div>
        </div>
    </div>
  )
}

export default Instrutores