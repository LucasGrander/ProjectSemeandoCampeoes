import './informationEdit.css'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import { useState } from 'react'

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

            <div className="container-edit-infos">
                <div className="box-edit-infos">
                    <div className="box-nav">
                        <div className="btn-filtro">
                            <span>Filtrar</span>
                            <div className="dropDown-filters">
                                <div className="box-filters">
                                    <span>Faixas</span>
                                    <select name="" id=""></select>
                                </div>
                            </div>
                        </div>

                        <div className="input-pesquisa">
                            <input type="text" />
                        </div>
                        
                        <div className="btn-pesquisar">
                            <span>pesquisar</span>
                        </div>
                    </div>
                    
                    <div className="table-result-pesquisa">

                    </div>
                </div>
            </div>
        </header>
    </div>
    )
}

export default informationEdit