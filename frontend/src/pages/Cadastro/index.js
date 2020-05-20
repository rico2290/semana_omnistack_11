import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import MaskedInput from 'react-text-mask'

import Footer from '../../Footer'


import api from '../../services/api.js'

import './styles.css'

import logoImg from '../../assests/logo.svg'


export default function Cadastro(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    
    const history = useHistory() //serve para fazer a navegação pra rota especifica
    async function handlerCadastro(e) {
        e.preventDefault()
        
        const data = {name, email, password, whatsapp, city, uf }
        /* console.log(data.whatsapp) */
        try {
            const response  = await api.post('/ongs', data)
            alert(`seu ID de acesso: ${response.data.id}` )
            history.push('/')
        } catch (error) {
            alert('Erro no cadastro, tente novamente')
        }
    }
    return(
        <div>
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

                 <form onSubmit={handlerCadastro}>
                     <input placeholder="Nome da ONG" 
                     value={name} onChange={e=>setName(e.target.value)}>
                     </input>

                     <input type="email" placeholder="E-mail"
                     value={email} onChange={e=>setEmail(e.target.value)}>
                     </input>

                     <input type="password" placeholder="Password"
                     value={password} onChange={e=>setPassword(e.target.value)}>
                     </input>

                     <input placeholder="Confirme password" id="usuarioPassword" type="password"
                     value={confirmPassword}
                     onChange={e=>setConfirmPassword(e.target.value)}>
                     </input>

                     {/* <input placeholder="Whatsapp"
                     value={whatsapp} onChange={e=>setWhatsapp(e.target.value)}>
                     </input> */}
                     <MaskedInput
                        mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        className="form-control"
                        placeholder="(99) 99999-9999"
                        guide={false}
                        value={whatsapp} 
                        onChange={e=>setWhatsapp(e.target.value)}>
                    </MaskedInput>

                     <div className="input-group">
                     <input placeholder="Cidade"
                     value={city} onChange={e=>setCity(e.target.value)}>                
                     </input>
                     <input placeholder="UF"
                     value={uf.toUpperCase()} onChange={e=>setUf(e.target.value)}
                     style={{ width: 70 }}>
                     </input>
                     </div>

                     <button className="button" type="submit">Cadastrar</button>
                 </form>
             </div>
         </div>
         <Footer/>
         </div>
    )
}

 