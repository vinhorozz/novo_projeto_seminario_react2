import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { NavStl} from './styles'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


const NAV1=() =>{

    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          {/*} <a class="navbar-brand" href="#">Navbar</a>*/}
         
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
          
          data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           
           {/*
           <span class="navbar-toggler-icon">
               <div>
                    <Link to ="/home" class="navbar-var"> Início </Link>
           
                    <Link to ="/about" class="navbar-var"> Sobre  </Link>
           
                    <Link to ="/help"class="navbar-var"> Ajuda  </Link>
                </div>
              
           </span>
*/}
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            
              <div class="navbar-nav">  
                    <spam><Link to ="/home" class="navbar-var">  Início  </Link> </spam> <spam> .</spam>
                    <spam><Link to ="/expenses"class="navbar-var"> Despesas </Link></spam><spam> .</spam>
                    <spam><Link to ="/validation"class="navbar-var"> Validação  </Link></spam><spam> .</spam>
                    <spam><Link to ="/signup"class="navbar-var"> Cadastro  </Link></spam> <spam> .</spam>        
                    <spam><Link to ="/about" class="navbar-var"> Sobre  </Link></spam> <spam> .</spam>
                    <spam><Link to ="/help"class="navbar-var">  Ajuda  </Link></spam>
                                  </div>      {/*
              <a class="nav-link" href="/home">  Início </a>
              
              <a class="nav-link" href="/about">  Sobre  </a>
              
              <a class="nav-link" href="/help">  Ajuda   </a>              

              {/*<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>*/}
         
          </div>
        </div>
      </nav>
    );
}

export default NAV1;