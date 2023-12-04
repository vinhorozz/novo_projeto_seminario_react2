import React from 'react';
import { ValidationStl } from './styles';
import { Btnform } from '../../styles/global';
import { ParagraphPage } from '../../styles/global';
//import {inputForm} from '../../styles/global';
import { BrowserRouter, Router , Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Bold } from '../../styles/global';

export const FormValidation=()=>{
  return( 
    //<BrowserRouter>

        <ValidationStl>    
        

        <div className ='form_input' container='box'>

<h1><b>Validação de dados</b></h1>  

<br></br> <p>Digite seu e-mail de cadastro para receber uma senha provisória!</p><br></br>
<label></label><br></br>
<inputForm><input type="text" placeholder="Digite seu e-mail"></input></inputForm> 
<br></br><label></label><br></br>
<spam>
<Link to= "/Signin"><button type="submit"   name="entrar" id="submit" onsubmit="">Enviar e-mail</button></Link>
</spam>
{/*<Btnform>Entrar</Btnform*/}
<br></br><br></br>
<spam>
<Link to= "/Signin"><button type="button" name="sair" id="submit1" onsubmit="login"> Sair</button></Link>
</spam>


                <br></br>
</div>
       </ValidationStl>
//</BrowserRouter>

);
}