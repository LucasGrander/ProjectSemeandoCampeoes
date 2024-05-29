import './NewsLatter.css'

interface Props{
    id?: string;
}


const NewsLatter = ({id}: Props) => {

  return (
    <div id={id} className="content-history">
        <div className="box-history">
            <div className="text-history">
              <span><h2>INFORMATIVO BJJ CAMPO MOURÃO</h2></span>

              <h2>Copa Noroeste de Judô</h2>
              Campo Mourão recebe neste final de semana, 25 e 26 de maio, a maior competição de judô da história do Paraná, o Campeonato Paranaense de Judô. O evento será realizado pela 
              Associação Mourãoense de Judô (AMJ), em parceria com a Prefeitura de Campo Mourão, por meio da Fundação de Esportes (FECAM) e a Federação Paranaense de Judô (FPRJ) e os 
              apoiadores do evento e do judô mourãoense de 2024.<br></br>
              As categorias sub-13, sub-15, sub-21 e veterano competem no sábado (25), das 8h às 18h, enquanto o Torneio Regional de Judô – 04 anos acima, será realizado no domingo (26), das 8h às 14h, 
              ambos no Ginásio de Esportes Belin Carolo, em anexo a Universidade Tecnológica Federal do Paraná (UFPR) – Campus de Campo Mourão.
              <h5>link das imagens: <a target='_blank'  href="https://resenhacm.com.br/campo-mourao-recebe-campeonato-paranaense-de-judo-neste-final-de-semana-no-ginasio-da-utfpr/">site resenha CM</a></h5>
                <h5>Postagem 27/05/2024</h5>
                          
              <h2>Treinão solidário</h2>
              Em 24/05/2024 as equipes PSC, Gracie Barra, Moraes BJJ (Norte) e Guedes BJJ (Clube feijão) se reuniram no Uchoa Dojô para realizar um treino solidário para arrecadação de ítens de higiene 
              pessoal para as vítimas da enxente no Rio Grande do Sul.
              <h5>link das imagens: <a target='_blank'  href="https://resenhacm.com.br/sucesso-iv-copa-kids-de-jiu-jitsu-semeando-campeoes-reuniu-mais-de-100-atletas/">meios de comunicações</a>
</h5>              <h5>Postagem 27/05/2024</h5>
              <br></br>


            </div>
        </div>
    </div>
    
  )
}
export default NewsLatter