import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2, FiEdit } from 'react-icons/fi'
import api from '../../services/api'

import './styles.css'
//import '../../global.css'

import logoImg from '../../assests/logo.svg'

export default function Profile(){
    const [incidents, setIncidents] = useState([])
    const history = useHistory()
    const ongName =  localStorage.getItem('ongName')
    const ongId =  localStorage.getItem('ongId')

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then( response =>{
            setIncidents(response.data)
            /* console.log(response.data) */
        })
    }, [ongId])

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            })
            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (error) {
            console.log('Erro ao deletar inicidente')
        }
    }

    //LogOut
    function handleLogOut(){
        localStorage.clear()
        history.push('/')
    }

/*     async function handleEditIncident(id){
        try {
            
        } catch (error) {
            console.log('Erro ao editar inicidente')
        }
    }
 */

    return( 
         <div className="profile-container">
             <header>
                <img src={ logoImg } alt="Be The Hero" ></img>
                <span>Bem-vindo(a)! {ongName}</span>

                <Link className="button" to="/incidents/NewIncident"> 
                Cadastrar novo caso
                </Link>
                <button type="button" onClick={handleLogOut}>
                    <FiPower size={ 20 } color="#e02041" title="Sair"></FiPower>
                </button>
             </header>

             {/* Seção Casos */}
             <input placeholder="Pesquisar" id="pesquisar">
             </input>
             <h1>Meus Casos </h1>
             <ul>
                {incidents.map(incident =>(
                    <li key={incident.id}>
                        <div className="campos">
                            <strong>Caso:</strong>
                            <p>{incident.title}</p>

                            <strong>Descrição:</strong>
                            <p>{incident.description}</p>

                            <strong>Valor:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                        </div>
                        <div className="btn">
                            <button type="button" id="editar">
                                <FiEdit size={20} color="#a8a8b3"title="editar"></FiEdit>
                            </button>
                            <button type="button" id="deletar" onClick={() =>handleDeleteIncident(incident.id)}>
                                <FiTrash2 size={20} color="#a8a8b3" title="deletar"></FiTrash2>
                            </button>
                        </div>
                    </li>
                    )
                 )
                 }
             </ul>
         </div>
    )
}

 