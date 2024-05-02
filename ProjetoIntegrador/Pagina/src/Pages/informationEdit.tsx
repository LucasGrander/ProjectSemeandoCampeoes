import './informationEdit.css'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import { useRef, useState } from 'react'
import axios from 'axios'
import { Participante } from '../interfaces/interfaces'

import filterICON from '../assets/filterICON.svg'
import closeX from '../assets/closePage.svg'
import lockICON from '../assets/lockIcon.svg'
import dropdownCloseOpenICON from '../assets/openCloseDropdown.svg'
import searchUser from '../assets/searchUserIcon.svg'
import removeUSER from '../assets/removeUserIcon.svg'
import editUSER from '../assets/editUserIcon.svg'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton'

const informationEdit = () => {

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

    const [dropdown, setDropdown] = useState(false)

    const handleOnClickBtnFiltro = () => {
        if(dropdown == false){
            setDropdown(true)
        }
        else{
            setDropdown(false)
        }
    }

    const [variosFiltros, setVariosFiltros] = useState<string[]>([])

    // verficar o tipo de seleção das faixas
    const [estadoBranca, setEstadoBranca] = useState(false)
    const [estadoCinza, setEstadoCinza] = useState(false)
    const [estadoAmarela, setEstadoAmarela] = useState(false)
    const [estadoLaranja, setEstadoLaranja] = useState(false)
    const [estadoVerde, setEstadoVerde] = useState(false)
    const [estadoAzul, setEstadoAzul] = useState(false)
    const [estadoRoxa, setEstadoRoxa] = useState(false)
    const [estadoMarrom, setEstadoMarrom] = useState(false)
    const [estadoPreta, setEstadoPreta] = useState(false)

    // verficar o tipo de seleção dos diversos
    const [estadoA_Z, setEstadoA_Z] = useState(false)
    const [estadoZ_A, setEstadoZ_A] = useState(false)
    const [estadoMaior18, setEstadoMaior18] = useState(false)
    const [estadoMenor18, setEstadoMenor18] = useState(false)

    // verficar o tipo de seleção dos diversos
    const [estadoCtLarParana, setEstadoCtLarParana] = useState(false)
    const [estadoCtCentro, setEstadoCtCentro] = useState(false)
    const [estadoCt, setEstadoCt] = useState(false)
    const [estadoCtIretama, setEstadoCtIretama] = useState(false)
    
    const handleSetFilter = (selectedFilter: string) => {
        setVariosFiltros([...variosFiltros, selectedFilter])
        
        if(selectedFilter.toLocaleLowerCase() == "branca"){
            setEstadoBranca(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "cinza"){
            setEstadoCinza(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "amarela"){
            setEstadoAmarela(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "laranja"){
            setEstadoLaranja(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "verde"){
            setEstadoVerde(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "azul"){
            setEstadoAzul(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "roxa"){
            setEstadoRoxa(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "marrom"){
            setEstadoMarrom(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "preta"){
            setEstadoPreta(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "a-z"){
            setEstadoA_Z(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "z-a"){
            setEstadoZ_A(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == ">18"){
            setEstadoMaior18(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "<18"){
            setEstadoMenor18(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "ct lar paraná"){
            setEstadoCtLarParana(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "ct centro"){
            setEstadoCtCentro(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "ct ???"){
            setEstadoCt(true)
        }
        else if(selectedFilter.toLocaleLowerCase() == "ct iretama"){
            setEstadoCtIretama(true)
        }
    }

    const handleRemoverFiltro = (index: number, filtro: any) => {
        const atualizaFiltros = [...variosFiltros]
        atualizaFiltros.splice(index, 1)
        setVariosFiltros(atualizaFiltros)

        if(filtro.toLowerCase() == "branca"){
            setEstadoBranca(false)
        }
        else if(filtro.toLocaleLowerCase() == "cinza"){
            setEstadoCinza(false)
        }
        else if(filtro.toLocaleLowerCase() == "amarela"){
            setEstadoAmarela(false)
        }
        else if(filtro.toLocaleLowerCase() == "laranja"){
            setEstadoLaranja(false)
        }
        else if(filtro.toLocaleLowerCase() == "verde"){
            setEstadoVerde(false)
        }
        else if(filtro.toLocaleLowerCase() == "azul"){
            setEstadoAzul(false)
        }
        else if(filtro.toLocaleLowerCase() == "roxa"){
            setEstadoRoxa(false)
        }
        else if(filtro.toLocaleLowerCase() == "marrom"){
            setEstadoMarrom(false)
        }
        else if(filtro.toLocaleLowerCase() == "preta"){
            setEstadoPreta(false)
        }
        else if(filtro.toLocaleLowerCase() == "a-z"){
            setEstadoA_Z(false)
        }
        else if(filtro.toLocaleLowerCase() == "z-a"){
            setEstadoZ_A(false)
        }
        else if(filtro.toLocaleLowerCase() == ">18"){
            setEstadoMaior18(false)
        }
        else if(filtro.toLocaleLowerCase() == "<18"){
            setEstadoMenor18(false)
        }
        else if(filtro.toLocaleLowerCase() == "ct lar paraná"){
            setEstadoCtLarParana(false)
        }
        else if(filtro.toLocaleLowerCase() == "ct centro"){
            setEstadoCtCentro(false)
        }
        else if(filtro.toLocaleLowerCase() == "ct ???"){
            setEstadoCt(false)
        }
        else if(filtro.toLocaleLowerCase() == "ct iretama"){
            setEstadoCtIretama(false)
        }
    }

    const [todosFilter, setTodosFilter] = useState(false)
    const [longName, setLongName] = useState(false)
    
    const handleFilterTodos = () => {
        if(variosFiltros.length < 1){
            setTodosFilter(true)
        }
        else{
            setTodosFilter(false)
        }

        if(variosFiltros.length > 9){
            setLongName(true)
        }
        else{
            setLongName(false)
        }
    }

    const handleCloseDropOnBlur = () => {
        if(dropdown){
            setDropdown(false)
        }
    }

    const [showInfosIntegrante, setShowInfosIntegrante] = useState([{}])

    const handleShowInfosIntegrante = (id: any) => {
        setShowInfosIntegrante(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    const [boxEditMode, setBoxEditMode] = useState(false)
    const [containerEditMode, setContainerEditMode] = useState(false)


    const handleOnClickCloseEdit = () => {
        setBoxEditMode(false)

        setTimeout(() =>{
            scrollToTop()
            setContainerEditMode(false)
        }, 300)
    }
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollToTop = () => {
        if (containerRef.current) {
          containerRef.current.scrollTop = 0
        }
  }

  // ligação com o banco de dados ---->

const [participants, setParticipants] = useState<Participante[]>([])
const [activeId, setActiveId] = useState(-1)
const [nomePessoa, setNomePessoa] = useState("")
const [faixa, setFaixa] = useState("")
const [dataNasc, setDataNasc] = useState("")
const [telefone, setTelefone] = useState("")
const [responsavel, setResponsavel] = useState("")
const [centroDeTreino, setCentroDeTreino] = useState("")



  const handleGetInfos = async () => {
    const res = await axios.get("http://localhost:8080/users")

    setParticipants(res.data)
  }

  const handleUpdateInfos = async () => {
    await axios.put("http://localhost:8080/users", {id: activeId, nome: nomePessoa, faixa: faixa, dataNasc: dataNasc, telefone: telefone, responsavel: responsavel, centro_treino: centroDeTreino})

    setBoxEditMode(false)
        setTimeout(() =>{
            scrollToTop()
            setContainerEditMode(false)

            setNomePessoa("")
            setFaixa("")
            setDataNasc("")
            setTelefone("")
            setResponsavel("")
            setCentroDeTreino("")
            setActiveId(-1)
        }, 300)

    handleGetInfos()
  }

  const handleSelectInfos = async (id : number) => {
      setBoxEditMode(true)
      setContainerEditMode(true)
      
    const participante = participants.find((participante : Participante) => participante.id === id)
    if(participante){
        setNomePessoa(participante.nome)
        setFaixa(participante.faixa)
        setDataNasc(participante.dataNas.slice(0, 10))
        setTelefone(participante.telefone)
        setResponsavel(participante.responsavel)
        setCentroDeTreino(participante.centro_treino)
    }
  }

  const handleDeleteInfos = async (id : number) => {
    await axios.delete(`http://localhost:8080/users?id=${id}`)

    handleGetInfos()
  }
    
    
    return(
    <div  onMouseMove={handleFilterTodos} className="page-infos-edit">
        <div style={{display: overlay? 'flex' : 'none' }} className="overlay">
        <img className='loading-top' src={overlayLoadingCircle}></img>
        <img className='loading-logo' src={LogoSemeandoCampeoes}></img>
        </div>
        <header>
            <div className="logo">
                <img onClick={handleOnClickHome} src={LogoSemeandoCampeoes} alt="Logo Semeando Campeões"></img>
            </div>
            <div className="title">
                <h1>Semeando Campeões</h1>
            </div>
        </header>

        <div className="container-edit-infos">
            <div className="box-edit-infos">

                <div className="box-nav">
                    <div onClick={handleOnClickBtnFiltro} className={dropdown ? "btn-filtro-selected" : "btn-filtro"}>
                        <span>Filtros</span>
                        <img className='filter-icon' src={filterICON}></img>
                        <img style={{transform: dropdown ? "rotate(180deg)" : "rotate(0deg)", transition: ".3s"}} className='dropdown-icon' src={dropdownCloseOpenICON}></img>
                    </div>

                        <div style={{pointerEvents: dropdown ? "all" : "none"}} onMouseLeave={handleCloseDropOnBlur} className="dropdown-container">
                            <div className="dropdown-itens-faixa">
                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" ,pointerEvents: dropdown ? "all" : "none", transition: ".1s"}}  className='title-drop' >Faixas</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0", transition: ".15s"}}  onClick={() => handleSetFilter("Branca")} className={estadoBranca ? "item-drop-selected" : "item-drop"} >Branca</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0", transition: ".15s"}}  onClick={() => handleSetFilter("Cinza")} className={estadoCinza ? "item-drop-selected" : "item-drop"} >Cinza</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}}  onClick={() => handleSetFilter("Amarela")} className={estadoAmarela ? "item-drop-selected" : "item-drop"} >Amarela</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}}  onClick={() => handleSetFilter("Laranja")} className={estadoLaranja ? "item-drop-selected" : "item-drop"} >Laranja</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}}  onClick={() => handleSetFilter("Verde")} className={estadoVerde ? "item-drop-selected" : "item-drop"} >Verde</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}}  onClick={() => handleSetFilter("Azul")} className={estadoAzul ? "item-drop-selected" : "item-drop"} >Azul</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}}  onClick={() => handleSetFilter("Roxa")} className={estadoRoxa ? "item-drop-selected" : "item-drop"} >Roxa</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}}  onClick={() => handleSetFilter("Marrom")} className={estadoMarrom ? "item-drop-selected" : "item-drop"} >Marrom</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}}  onClick={() => handleSetFilter("Preta")} className={estadoPreta ? "item-drop-selected" : "item-drop"} >Preta</span>
                            </div>

                            <div className="dropdown-itens-cts">
                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} className='title-drop'>Centros de treinamento</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} onClick={() => handleSetFilter("CT Lar Paraná")} className={estadoCtLarParana ? "item-drop-selected" : "item-drop"} >CT - Lar Paraná</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} onClick={() => handleSetFilter("CT Centro")} className={estadoCtCentro ? "item-drop-selected" : "item-drop"} >CT - Centro</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} onClick={() => handleSetFilter("CT ???")} className={estadoCt ? "item-drop-selected" : "item-drop"} >CT - ???</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} onClick={() => handleSetFilter("CT Iretama")} className={estadoCtIretama ? "item-drop-selected" : "item-drop"} >CT - Iretama</span>
                            </div>

                            <div className="dropdown-itens-diversos">
                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} className='title-drop' >Diversos</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} onClick={() => handleSetFilter("A-Z")} className={estadoA_Z ? "item-drop-selected" : "item-drop"} >Ordem A-Z</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} onClick={() => handleSetFilter("Z-A")} className={estadoZ_A ? "item-drop-selected" : "item-drop"} >Ordem Z-A</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} onClick={() => handleSetFilter(">18")} className={estadoMaior18 ? "item-drop-selected" : "item-drop"} >Maior de 18</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} onClick={() => handleSetFilter("<18")} className={estadoMenor18 ? "item-drop-selected" : "item-drop"} >Menor de 18</span>
                            </div>

                        </div>
                    

                    <div className="input-pesquisa">
                        <div style={{display: todosFilter ? "flex" : "none", pointerEvents: "none"}}  className="filter-fixed">
                            <span>Todos</span>
                            <img src={lockICON}></img>
                        </div>
                        {variosFiltros.map((filtro, index) => (
                        <div onClick={() => handleRemoverFiltro(index, filtro)} key={index} className={longName ? "filter-picked-long" : "filter-picked"}>
                            <span>{filtro}</span>
                            <img src={closeX}></img>
                        </div>
                        ))}

                    </div>
                    
                    <div className="box-search-icon">
                        <img onClick={handleGetInfos} className='search-icon' src={searchUser}></img>
                    </div>
                </div>
                
                <div className="table-result-pesquisa">
                        
                        {participants.map((participante)=> (
                        <div className="adaptive-infos-overlay" key={participante.id}>
                            <div className={showInfosIntegrante ? "container-integrante-active" : "container-integrante-inative"} style={{opacity: dropdown ? ".1" : "1"}} >
                                <div onClick={() =>handleShowInfosIntegrante(participante.id)} className="box-integrante">
                                    <span>{participante.nome}</span>
                                    <img style={{transform: showInfosIntegrante[participante.id] ? "rotate(180deg)" : "rotate(0deg)", transition: ".7s"}} src={dropdownCloseOpenICON}></img>
                                </div>
                            </div>

                            <div className={showInfosIntegrante[participante.id] ? "container-integrante-infos-opened" : "container-integrante-infos-closed"}>
                                <div className="icons-edit-remove">
                                    <img onClick={() => handleSelectInfos(participante.id)} className='edit-icon' src={editUSER}></img>
                                    <img onClick={() => handleDeleteInfos(participante.id)} className='remove-icon' src={removeUSER}></img>
                                </div>

                                <div className="infos-integ">
                                    <span className="title-infos-integ">Dados</span>
                                    <span><strong>Nome Completo: </strong> {participante.nome} </span>
                                    <span><strong>Data de nascimento (aaaa/mm/dd): </strong> {participante.dataNas.slice(0, 10)} </span>
                                    <span><strong>Número de telefone: </strong> {participante.telefone} </span>
                                    <span><strong>Responsável: </strong> {participante.responsavel} </span>
                                    <span><strong>Centro de treinamento: </strong> {participante.centro_treino} </span>
                                    <span><strong>Cor da faixa: </strong> {participante.faixa} </span>
                                </div> 

                                <div className="infos-integ">
                                <span className="title-infos-integ">Endereço</span>
                                    <span><strong>Info: </strong> xxxxxxx </span>
                                    <span><strong>Info: </strong> xxxxxxx </span>
                                    <span><strong>Info: </strong> xxxxxxx </span>
                                    <span><strong>Info: </strong> xxxxxxx </span>
                                    <span><strong>Info: </strong> xxxxxxx </span>
                                </div>    
                            </div>
                        </div>
                        ))}
                                            
                </div>
            </div>
        </div>

        <div style={{display: containerEditMode ? "flex" : "none"}} className="container-edicao">
            <div ref={containerRef} className={boxEditMode ? "content-edicao-on" : "content-edicao-off"}>
                <span className='title-container-edit' >Alteração</span>
                <img className='editBC' src={editUSER}></img>
                <div className="button-label-editUser">
                    <label className="labelFocused" htmlFor='nome'>Nome Completo</label>
                    <MyInput
                        id="nomeCompleto"
                        value={nomePessoa.length > 0 ? nomePessoa : ""}
                        onChange={(e) => setNomePessoa(e.target.value)}
                        type='text'
                        width= "90%"
                        height= "7vh"
                        padding="0vh 8vh 0vh 2.5vh"
                        fontSize= "2.4vh"
                        border= "solid .3vh black"
                        borderBottom="solid .3vh black"
                        borderRadius='.6vh'
                        backgroundColor="transparent"
                        transition= ".4s"
                        enter= "transparent"
                        leave= "transparent"
                    />
                </div>

                 <div className="button-label-editUser">
                    <label className="labelFocused" htmlFor='dataNas'>Data de nascimento</label>
                    <MyInput
                        id="dataNas"
                        value={dataNasc.length > 0 ? dataNasc : ""}
                        onChange={(e) => setDataNasc(e.target.value)}
                        type='text'
                        width= "90%"
                        height= "7vh"
                        padding="0vh 8vh 0vh 2.5vh"
                        fontSize= "2.4vh"
                        border= "solid .3vh black"
                        borderBottom="solid .3vh black"
                        borderRadius='.6vh'
                        backgroundColor="transparent"
                        transition= ".4s"
                        enter= "transparent"
                        leave= "transparent"
                    />
                </div>

                <div className="button-label-editUser">
                    <label className="labelFocused" htmlFor='telefone'>Telefone</label>
                    <MyInput
                        id="telefone"
                        value={telefone.length > 0 ? telefone : ""}
                        onChange={(e) => setTelefone(e.target.value)}
                        type='text'
                        width= "90%"
                        height= "7vh"
                        padding="0vh 8vh 0vh 2.5vh"
                        fontSize= "2.4vh"
                        border= "solid .3vh black"
                        borderBottom="solid .3vh black"
                        borderRadius='.6vh'
                        backgroundColor="transparent"
                        transition= ".4s"
                        enter= "transparent"
                        leave= "transparent"
                    />
                </div>

                <div className="button-label-editUser">
                    <label className="labelFocused" htmlFor='responsavel'>Responsável</label>
                    <MyInput
                        id="responsavel"
                        value={responsavel.length > 0 ? responsavel : ""}
                        onChange={(e) => setResponsavel(e.target.value)}
                        type='text'
                        width= "90%"
                        height= "7vh"
                        padding="0vh 8vh 0vh 2.5vh"
                        fontSize= "2.4vh"
                        border= "solid .3vh black"
                        borderBottom="solid .3vh black"
                        borderRadius='.6vh'
                        backgroundColor="transparent"
                        transition= ".4s"
                        enter= "transparent"
                        leave= "transparent"
                    />
                </div>

                <div className="button-label-editUser">
                    <label className="labelFocused" htmlFor='ct'>Centro de Treinamento</label>
                    <MyInput
                        id="ct"
                        value={centroDeTreino.length > 0 ? centroDeTreino : ""}
                        onChange={(e) => setCentroDeTreino(e.target.value)}
                        type='text'
                        width= "90%"
                        height= "7vh"
                        padding="0vh 8vh 0vh 2.5vh"
                        fontSize= "2.4vh"
                        border= "solid .3vh black"
                        borderBottom="solid .3vh black"
                        borderRadius='.6vh'
                        backgroundColor="transparent"
                        transition= ".4s"
                        enter= "transparent"
                        leave= "transparent"
                    />
                </div>

                <div className="save-cancel">
                    <MyButton
                    onClick={handleUpdateInfos}
                    width= "auto"
                    height= "8vh"
                    padding="1vh 3vh"
                    cursor="pointer"
                    fontSize= "2.5vh"
                    fontWeight= "bold"
                    backgroundColor="rgba(0, 255, 0, 0.8)"
                    border= ".3vh black solid"
                    borderBottom= ".3vh black solid"
                    borderRadius="1vh"
                    transition= ".5s"
                    children="Salvar alterações"
                    enter="rgba(0, 255, 0, 0.8)"
                    leave="rgba(0, 255, 0, 0.3)"
                    />

                    <MyButton
                    onClick={handleOnClickCloseEdit}
                    width= "auto"
                    height= "8vh"
                    padding="1vh 3vh"
                    cursor="pointer"
                    fontSize= "2.5vh"
                    fontWeight= "bold"
                    backgroundColor="rgba(255, 0, 0, 0.8)"
                    border= ".3vh black solid"
                    borderBottom=".3vh black solid"
                    borderRadius="1vh"
                    transition= ".5s"
                    children="Cancelar"
                    enter="rgba(255, 0, 0, 0.8)"
                    leave="rgba(255, 0, 0, 0.3)"
                    />
                </div>
            </div>
        </div>

    </div>
    )
}

export default informationEdit