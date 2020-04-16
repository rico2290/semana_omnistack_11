import React from 'react'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './styles.css'

import logoImg from '../../assests/logo.svg'

export default function Cadastro(){
    return(
         <div className="cadastro-container">
             <div className="content">
                 <section>
                    <img src={logoImg} alt="Be The Hero"></img>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro. Entre na palataforma e ajude outras pessoas a encontrarem os casaos da sua ONG</p>

                    <Link className="back-link" to="/"> 
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar
                    </Link>
                 </section>

                 <form>
                     <input placeholder="Nome da ONG"></input>
                     <input type="email" placeholder="E-mail"></input>
                     <input placeholder="Whatsapp"></input>

                     <div className="input-group">
                     <input placeholder="Cidade"></input>
                     <input placeholder="UF" style={{ width: 70 }}></input>
                     </div>

                     <button className="button" type="submit">Cadastrar</button>
                 </form>
             </div>
         </div>
    )
}

 