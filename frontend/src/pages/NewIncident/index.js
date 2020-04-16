import React from 'react'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assests/logo.svg'

export default function newIncident(){
    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
               <img src={logoImg} alt="Be The Hero"></img>
               <h1>Cadastrar novo caso</h1>
               <p>Descreva o caso detalhadamente para encontrar um heroi para resolver seu caso</p>

               <Link className="back-link" to="/profile"> 
                   <FiArrowLeft size={16} color="#e02041"/>
                   Voltar para home
               </Link>
            </section>

            <form>
                <input placeholder="Título do caso"></input>
                <textarea  placeholder="Desrceva seu caso aqui"></textarea>
                <input placeholder="Valor em reais"></input>
          

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
     )
}