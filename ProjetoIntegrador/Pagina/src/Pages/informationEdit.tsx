import './informationEdit.css'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import { useState } from 'react'

import filterICON from '../assets/filterICON.svg'
import loupSearchICON from '../assets/loupSearchIcon.svg'
import deleteFilter from '../assets/closePage.svg'
import dropdownCloseOpenICON from '../assets/openCloseDropdown.svg'

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

    const handleSetFilter = (selectedFilter: string) => {
        setVariosFiltros([...variosFiltros, selectedFilter])
    }   

    const handleRemoverFiltro = (index: number) => {
        const atualizaFiltros = [...variosFiltros];
        atualizaFiltros.splice(index, 1);
        setVariosFiltros(atualizaFiltros);
    };

    const [todosFilter, setTodosFilter] = useState(false)
    const [longName, setLongName] = useState(false)
    
    const handleFilterTodos = () => {
        if(variosFiltros.length < 1){
            setTodosFilter(true)
        }
        else{
            setTodosFilter(false)
        }

        if(variosFiltros.length > 4){
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
    

    console.log(variosFiltros.length)
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
                    <div style={{background: dropdown ? "linear-gradient(180deg, rgb(255, 255, 255), rgba(0, 0, 0, 0.158))": "transparent"}} onClick={handleOnClickBtnFiltro} className="btn-filtro">
                        <span>Filtros</span>
                        <img className='filter-icon' src={filterICON}></img>
                        <img style={{transform: dropdown ? "rotate(180deg)" : "rotate(0deg)", transition: ".3s"}} className='dropdown-icon' src={dropdownCloseOpenICON}></img>
                    </div>

                        <div onMouseLeave={handleCloseDropOnBlur} className="dropdown-container">
                            <div  style={{opacity: dropdown ? "1" : "0",pointerEvents: dropdown ? "all" : "none", transition: ".2s"}} className="dropdown-itens-faixa">
                                <span className='title-drop' >Faixas</span>
                                <span onClick={() => handleSetFilter("Branca")} className='item-drop' >Branca</span>
                                <span onClick={() => handleSetFilter("Cinza")} className='item-drop' >Cinza</span>
                                <span onClick={() => handleSetFilter("Amarela")} className='item-drop' >Amarela</span>
                                <span onClick={() => handleSetFilter("Laranja")} className='item-drop' >Laranja</span>
                                <span onClick={() => handleSetFilter("Verde")} className='item-drop' >Verde</span>
                                <span onClick={() => handleSetFilter("Azul")} className='item-drop' >Azul</span>
                                <span onClick={() => handleSetFilter("Roxa")} className='item-drop' >Roxa</span>
                                <span onClick={() => handleSetFilter("Marrom")} className='item-drop' >Marrom</span>
                                <span onClick={() => handleSetFilter("Preta")} className='item-drop' >Preta</span>
                            </div>

                            <div style={{opacity: dropdown ? "1" : "0",pointerEvents: dropdown ? "all" : "none", transition: ".4s"}} className="dropdown-itens-cts">
                                <span className='title-drop'>Centros de treinamento</span>
                                <span onClick={() => handleSetFilter("CT Lar Paraná")} className='item-drop' >CT - Lar Paraná</span>
                                <span onClick={() => handleSetFilter("CT Centro")} className='item-drop' >CT - Centro</span>
                                <span onClick={() => handleSetFilter("CT ???")} className='item-drop' >CT - ???</span>
                                <span onClick={() => handleSetFilter("CT Ginásio Iretama")} className='item-drop' >CT - Ginásio Iretama</span>
                            </div>

                            <div style={{opacity: dropdown ? "1" : "0",pointerEvents: dropdown ? "all" : "none", transition: ".6s"}} className="dropdown-itens-diversos">
                                <span className='title-drop' >Diversos</span>
                                <span onClick={() => handleSetFilter("A-Z")} className='item-drop' >Ordem A-Z</span>
                                <span onClick={() => handleSetFilter("Z-A")} className='item-drop' >Ordem Z-A</span>
                                <span onClick={() => handleSetFilter(">18")} className='item-drop' >Maior de 18</span>
                                <span onClick={() => handleSetFilter("<18")} className='item-drop' >Menor de 18</span>
                            </div>

                        </div>
                    

                    <div className="input-pesquisa">
                        <div style={{display: todosFilter ? "flex" : "none", pointerEvents: "none"}}  className="filter-picked">
                            <span>Todos</span>
                            <img src={deleteFilter}></img>
                        </div>
                        {variosFiltros.map((filtro, index) => (
                        <div onClick={() => handleRemoverFiltro(index)} key={index} className={longName ? "filter-picked-long" : "filter-picked"}>
                            <span>{filtro}</span>
                            <img src={deleteFilter}></img>
                        </div>
                        ))}

                    </div>
                    
                    <div className="btn-pesquisar">
                    <img src={loupSearchICON}></img>
                    </div>
                </div>
                
                <div className="table-result-pesquisa">

                </div>
            </div>
        </div>
    </div>
    )
}

export default informationEdit