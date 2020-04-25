import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api'
import '../../global.css'
import './styles.css'

import heroesImg from '../../assests/heroes.png'
import logoImg from '../../assests/logo.svg'



export default function Login(){
    const [id, setId] = useState('')
    const history = useHistory()

/*     const clearInput = () => {
        document.getElementById("usuarioId").reset(); 
        this.setState('')
      } */

    async function handleLogin(e){
        e.preventDefault()
        try {
            const response = await api.post('sessions', { id })
            localStorage.setItem('ongId', id)
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

