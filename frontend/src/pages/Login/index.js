import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api'
import '../../global.css'
import './styles.css'

import heroesImg from '../../assests/heroes.png'
import logoImg from '../../assests/logo.svg'

/* function initialState(){
    return {id:'', password:''}
} */


export default function Login(){
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()



    async function handleLogin(e){
        e.preventDefault()
        try {
            const response = await api.post('sessions', { id })
            console.log({id, password})
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongPassword', password)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')
  
        } catch (error) {
            alert('Falha na autentição, tente novamente')
        }
    }
   
    
    return(
        <div className="login-container">
            <section className="form">
            <img src={logoImg} alt="Be The Hero"></img>

            <form onSubmit={handleLogin}>
                <h1>Faça seu Login</h1>
                <input placeholder="Sua ID" id="usuarioId"
                value={id}
                onChange={e=>setId(e.target.value)}>
                </input>

                <input placeholder="Password" id="usuarioPassword" type="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}>
                </input>

                <button className="button" type="submit">Login</button>
                    
                <Link className="back-link" to="cadastro"> 
                    <FiLogIn size={ 16 } color="#e02041"/>
                    Não Tenho Cadastro
                </Link>
            </form>
            </section>
            <img src={heroesImg} alt="Heroes"></img>
        </div>
    )
}

