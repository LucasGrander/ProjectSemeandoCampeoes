import './CentrosDeTreinamento.css'
import AnyIMG from '../assets/react.svg'
import PSCC from '../assets/PSCC.jpeg'
import PSCLP from '../assets/PSCLP.jpeg'
import PSC from '../assets/LogoSemeandoCampeoes.png'

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
                    <span>Rua São Josafat 1778</span>
                    <span>Centro, Campo Mourão - PR</span>
                    <span>CEP 87302-170</span>
                </div>
            </div>

            <div className="boxes">
                <div className="imag-ct">
                    <img src={PSCLP} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>CT Lar Paraná</h2>
                    <h3>Associação de Moradores do Lar Paraná</h3>
                    <span>Rua Duque de Caxias, esquina com a Rua Shuhei Uetsuka</span>
                    <span>Jardim Lar Paraná, Campo Mourão - PR</span>
                    <span>CEP 87305-120</span>
                </div>
            </div>

            <div className="boxes">
                <div className="imag-ct">
                    <img src={AnyIMG} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>CT Iretama</h2>
                    <h3>Ginasio Poliesportivo Wassilo Mamus</h3>
                    <span>Rua Otaviano Felix, snº</span>
                    <span>Centro, Iretama - PR</span>
                    <span>CEP 87280-000</span>
                </div>
            </div>

            <div className="boxes">
                <div className="imag-ct">
                    <img src={PSC} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>Próximo CT</h2>
                    <span>Se você tem interesse em um CT do Projeto entre em contato conosco</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default CentrosDeTreinamento