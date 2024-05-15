import './CentrosDeTreinamento.css'
import PSCC from '../assets/PSCC.jpeg'
import PSCLP from '../assets/PSCLP.jpeg'
import PSC from '../assets/LogoSemeandoCampeoes.png'
import instaLOGO from '../assets/instagram.svg'
import whatsLOGO from '../assets/whatsapp.svg'
import CTIretama from '../assets/CTIretama11.jpg'

interface Props{
    id?: string;
}

const CentrosDeTreinamento = ({id}: Props) => {

    return(
        <>
        <div id={id} className="content-ct">
            <div className="boxes">
                <div className="imag-ct">
                    <img src={PSCC} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>CT Centro</h2>
                    <h3>Primeira Igreja Batista</h3>
                    <span>Rua São Josafat, 1778</span>
                    <span>Centro, Campo Mourão - PR,</span>
                    <span>87302-170</span>
                    <br />
                    <span><strong>Treinos:</strong></span>
                    <span>Terças e quintas: 19h</span>
                    <span>Sábados: 16h</span>
                </div>
            </div>

            <div className="boxes">
                <div className="imag-ct">
                    <img src={PSCLP} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>CT Lar Paraná</h2>
                    <h3>Associação de Moradores do Lar Paraná</h3>
                    <span>Rua Duque de Caxias,</span>
                    <span>Jardim Lar Paraná, Campo Mourão - PR,</span>
                    <span>87305-120</span>
                    <br />
                    <span><strong>Treinos:</strong></span>
                    <span>Segundas, quartas e sextas: 18h20</span>
                </div>
            </div>

            <div className="boxes">
                <div className="imag-ct">
                    <img src={CTIretama} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>CT Iretama</h2>
                    <h3>Ginasio Poliesportivo Wassilo Mamus</h3>
                    <span>Rua Otaviano Felix, 0000</span>
                    <span>Centro, Iretama - PR,</span>
                    <span>87280-000</span>
                    <br />
                    <span><strong>Treinos:</strong></span>
                    <span>dias aqui</span>
                </div>
            </div>

            <div className="boxes">
                <div className="imag-ct">
                    <img src={PSC} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>Próximo CT</h2>
                    <span className='new-ct-contact' >Você tem interesse em um Centro de Treinamento do Projeto?<br /> Entre em contato conosco!</span>
                    <div className="social-midia-new-ct">
                        <a target='_blank' href='https://www.instagram.com/rmbradock/'><img src={instaLOGO}></img></a>
                        <a target='_blank' href='https://api.whatsapp.com/send?phone=5544998130695'><img src={whatsLOGO}></img></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CentrosDeTreinamento