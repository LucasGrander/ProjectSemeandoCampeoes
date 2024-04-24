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
    
    return(
    <div className="page-infos-edit">
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
                    <div className="btn-filtro">
                        <span>Filtros</span>
                        <img className='filter-icon' src={filterICON}></img>
                        <img className='dropdown-icon' src={dropdownCloseOpenICON}></img>
                        <div className="dropDown-filters">
                        </div>
                        <div className="dropdown-container">
                            <div className="dropdown-itens">
                                <span>Aluno:</span>
                                <span>asda</span>
                                <span>Cidsadsdsdnza</span>
                                <span>tesdsdsdsdste</span>
                                <span>teasste</span>
                                <span>tedsdsdadste</span>
                                <span>tesasdasdte</span>
                                <span>teasdasdste</span>
                                <span>tesasdate</span>
                                <span>tessdasdasdte</span>
                            </div>

                            <div className="dropdown-itens">
                                <span>Faixas:</span>
                                <span>Branca</span>
                                <span>Cinza</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                            </div>

                            <div className="dropdown-itens">
                                <span>Faixas:</span>
                                <span>Branca</span>
                                <span>Cinza</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                            </div>

                            <div className="dropdown-itens">
                                <span>Faixas:</span>
                                <span>Branca</span>
                                <span>Cinza</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                                <span>teste</span>
                            </div>
                        </div>
                    </div>

                    <div className="input-pesquisa">
                        <input type="text" />

                        <div className="filter-picked">
                            <span>Alunos</span>
                            <img src={deleteFilter}></img>
                        </div>

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