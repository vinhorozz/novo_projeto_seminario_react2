import React from 'react';
import { SignStl } from './styles';
import { Btnform } from '../../styles/global';
import { ParagraphPage } from '../../styles/global';
import { BrowserRouter, Router , Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Bold } from '../../styles/global';

export const FormSignin=()=>{
  return( 

   // <BrowserRouter>
    <SignStl>    
  

    <div className ='form_input' container='box'>

    <h1>Login</h1>  
    
    <br></br><br></br>
    <label>Usuário</label><br></br>
    <inputForm><input type="text" placeholder="Digite seu e-mail"></input></inputForm> 
    <br></br><label>Senha</label><br></br>
 
    <inputForm></inputForm>
    <input type="password" placeholder="Digite sua senha"></input>
    <br></br><br></br>
    <Btnform>Entrar</Btnform>
    <br></br><br></br>

    <label type="text" >Não possuo cadastro. <Link to = "/Signup" id="login"> <Bold>Registrar-me</Bold></Link> </label><br></br>
    <label type="text" >Esqueci minha senha. <Link to= "/Validation"id="validacao">
      <b>Confirmar dados!</b></Link></label>
 </div>
</SignStl>
//</BrowserRouter>

);}

  
