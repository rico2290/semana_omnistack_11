import React from 'react'
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import '../../global.css'
import './styles.css'

import heroesImg from '../../assests/heroes.png'
import logoImg from '../../assests/logo.svg'

export default function Login(){
    return(
        <div className="login-container">
            <section className="form">
            <img src={logoImg} alt="Be The Hero"></img>

            <form>
                <h1>Faça seu Login</h1>
                <input placeholder="Sua ID"></input>
                <button className="button" type="submit">Login</button>
                    
                <Link className="back-link" to="cadastro"> 
                    <FiLogIn size={16} color="#e02041"/>
                    Não Tenho Cadastro
                </Link>
            </form>
            </section>
            <img src={heroesImg} alt="Heroes"></img>
        </div>
    )
}