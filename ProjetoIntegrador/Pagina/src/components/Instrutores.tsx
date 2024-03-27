import './Instrutores.css'
import DionatanIMG from '../assets/FotoDionatan.png'
import RicardoIMG from '../assets/FotoRicardo.png'

interface Props{
    id?: string;
}


const Instrutores = ({id}: Props) => {

  return (
    <div id={id} className="content">
        <div className="box">
            <div className="box-img">
                <img className='ricardo' src={RicardoIMG} alt='foto tal'></img>
            </div>
            <div className="box-info">
                <span>Ricardo Maciel Batista</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione magni et natus eligendi animi at quos corporis autem aliquam cupiditate blanditiis, sed voluptas maiores, rem expedita. Similique nihil molestias fugit.</p>
            </div>
        </div>
        <div className="box">
            <div className="box-img">
                <img className='dionata' src={DionatanIMG} alt='foto tal'></img>
            </div>
            <div className="box-info">
                <span>Dionata da Silva Benedito</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione magni et natus eligendi animi at quos corporis autem aliquam cupiditate blanditiis, sed voluptas maiores, rem expedita. Similique nihil molestias fugit.</p>
            </div>
        </div>
    </div>
  )
}

export default Instrutores