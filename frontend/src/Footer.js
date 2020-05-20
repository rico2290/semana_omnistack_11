import React /* {Component} */ from 'react'
import {FiInstagram} from 'react-icons/fi'
import {AiFillFacebook, AiFillTwitterCircle, AiFillGithub} from 'react-icons/ai'
import {Link} from 'react-router-dom'

import './global.css'

export default function Footer(){

    function handlerFacePage(){
        window.open("https://facebook.com/rico2290", "_blank" )
    }
    function handlerGithubPage(){
        window.open("https://github.com/rico2290", "_blank" )
    }
    function handlerInstagramPage(){
        window.open("https://instragram.com/ricorjl", "_blank", isSecureContext)
    }

    
    return (
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
            <div className="copyright">
                <p> Todos os direitos reservados <span>&copy;</span> 2020 {/* | Rsoft Ltda. */}</p> 
                <p> Feito com  <span id="heart">&hearts;</span> Rsoft Ltda.</p>  
            </div>                          
        </footer>
    )
}