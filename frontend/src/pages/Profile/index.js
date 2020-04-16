import React from 'react'
import {Link} from 'react-router-dom'
import {FiPower, FiTrash2, FiEdit} from 'react-icons/fi'
//import {FiTrash2} from 'react-icons/fi'

import './styles.css'
//import '../../global.css'

import logoImg from '../../assests/logo.svg'

export default function Profile(){
    return( 
         <div className="profile-container">
             <header>
                <img src={logoImg} alt="Be The Hero" ></img>
                <span>Bem-vindo(a)! ONG</span>

                <Link className="button" to="/incidents/NewIncident"> 
                Cadastrar novo caso
                </Link>
                <button type="button">
                    <FiPower size={ 20 } color="#e02041"></FiPower>
                </button>
             </header>

             {/* Seção Cadastrados */}
             <h1>Casos cadastrados</h1>
             <ul>
                 <li>
                     <div className="campos">
                        <strong>Caso:</strong>
                        <p>Caso Teste</p>

                        <strong>Descrição:</strong>
                        <p>Caso Teste</p>

                        <strong>Valor:</strong>
                        <p>R$ 120,00</p>
                     </div>
                     <div className="btn">
                        <button type="button" id="editar">
                            <FiEdit size={20} color="#a8a8b3"title="editar"></FiEdit>
                        </button>
                        <button type="button" id="deletar">
                            <FiTrash2 size={20} color="#a8a8b3" title="deletar"></FiTrash2>
                        </button>
                     </div>
                </li>

                <li>
                     <div className="campos">
                        <strong>Caso:</strong>
                        <p>Caso Teste</p>

                        <strong>Descrição:</strong>
                        <p>Caso Teste</p>

                        <strong>Valor:</strong>
                        <p>R$ 120,00</p>
                     </div>
                     <div className="btn">
                        <button type="button" id="editar">
                            <FiEdit size={20} color="#a8a8b3"title="editar"></FiEdit>
                        </button>
                        <button type="button" id="deletar">
                            <FiTrash2 size={20} color="#a8a8b3" title="deletar"></FiTrash2>
                        </button>
                     </div>
                </li>

                <li>
                     <div className="campos">
                        <strong>Caso:</strong>
                        <p>Caso Teste</p>

                        <strong>Descrição:</strong>
                        <p>Caso Teste</p>

                        <strong>Valor:</strong>
                        <p>R$ 120,00</p>
                     </div>
                     <div className="btn">
                        <button type="button" id="editar">
                            <FiEdit size={20} color="#a8a8b3"title="editar"></FiEdit>
                        </button>
                        <button type="button" id="deletar">
                            <FiTrash2 size={20} color="#a8a8b3" title="deletar"></FiTrash2>
                        </button>
                     </div>
                </li>

                <li>
                     <div className="campos">
                        <strong>Caso:</strong>
                        <p>Caso Teste</p>

                        <strong>Descrição:</strong>
                        <p>Caso Teste</p>

                        <strong>Valor:</strong>
                        <p>R$ 120,00</p>
                     </div>
                     <div className="btn">
                        <button type="button" id="editar">
                            <FiEdit size={20} color="#a8a8b3"title="editar"></FiEdit>
                        </button>
                        <button type="button" id="deletar">
                            <FiTrash2 size={20} color="#a8a8b3" title="deletar"></FiTrash2>
                        </button>
                     </div>

                </li>


             </ul>
         </div>
    )
}

 