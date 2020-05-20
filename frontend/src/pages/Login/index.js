import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn, FiInstagram} from 'react-icons/fi'
import {AiFillFacebook, AiFillTwitterCircle, AiFillGithub, /* AiFillInstagram */} from 'react-icons/ai'


import api from '../../services/api'
import '../../global.css'
import './styles.css'

import heroesImg from '../../assests/heroes.png'
import logoImg from '../../assests/logo.svg'

/* function initialState(){
    return {id:'', password:'', confirmPassword:''}
} */


export default function Login(){
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

function handlerFacePage(){
    window.open("https://facebook.com/rico2290", "_blank" )
}
function handlerGithubPage(){
    window.open("https://github.com/rico2290", "_blank" )
}
function handlerInstagramPage(){
    window.open("https://instragram.com/ricorjl", "_blank", isSecureContext)
}

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
        <div className="container-cotainer-main">
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
            <footer>
                <ul>
                    <li>
                        <Link className="github-link" onClick={handlerGithubPage} >
                            <AiFillGithub size={ 30 } color="#fff"></AiFillGithub>
                        </Link>
                    </li>
                    <li>
                        <Link className="github-link" onClick={handlerFacePage} >
                            <AiFillFacebook size={ 30 } color="#fff"></AiFillFacebook>
                        </Link>
                    </li>
                    <li>
                        <Link className="github-link" onClick={handlerFacePage} >
                            <AiFillTwitterCircle size={ 30 } color="#fff"></AiFillTwitterCircle>
                        </Link>
                    </li>
                    <li>
                        <Link className="github-link" onClick={handlerInstagramPage} >
                            <FiInstagram size={ 30 } color="#fff"></FiInstagram>
                        </Link>
                    </li>
                </ul>

                <p> Todos os direitos reservados <span>&reg;</span> 2020</p>

                
                   {/*  <MaskedInput
                    mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className="form-control"
                    placeholder="Enter a phone number"
                    guide={false}
                    id="my-input-id"
                    onBlur={() => {}}
                    onChange={() => {}}></MaskedInput> */}
                
                            
            </footer>
        </div>
    )
}

