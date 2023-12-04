import React from 'react';
import { SignupStl } from './styles';
import { Btnform } from '../../styles/global';
import { ParagraphPage } from '../../styles/global';
import {inputForm} from '../../styles/global';
import { BrowserRouter,routes,route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Bold } from '../../styles/global';

export const FormSignup=()=>{
  return( 

   // <BrowserRouter>
    <SignupStl>    
    <div className ='form_input' container='box'>

            <h1><b>Cadastro de usuário</b></h1>  

            <br></br><br></br>
            <label>Nome completo</label><br></br>
           <inputForm> <input type="text" name="nome" id="nome"  placeholder="Nome completo" required></input></inputForm>
           <label>Endereço</label><br></br>
            <inputForm><input type="text" name ="" id=""placeholder="Endereço" required></input></inputForm> 
            <label>Cidade</label><br></br>       
            <inputForm><input type="text" name="" id="" placeholder="Cidade"required></input></inputForm>

            <label>Estado</label><br></br>       
            <inputForm><input type="text" name="" id="" placeholder="Estado"required></input></inputForm>
            <label>Telefone</label><br></br>       
            <inputForm><input type="text" name="" id="" placeholder="Telefone"required></input></inputForm>
            <br></br>

            <label for="data_nascimento">Data de Nascimento:  </label> <br></br><input type="date" name="data_nascimento" id="data_nascimento" required ></input>
          

            
            <br></br>
            <spam>    
            <label>Sexo: </label> <br></br>      
            
           <label for="feminino">Feminino <input type="radio" id="feminino" name="genero" value="feminino" required></input></label>
           <label for="masculino">Masculino<input type="radio" id="masculino" name="genero" value="masculino" required></input></label>      
           <label for="outros">Outros<input type="radio" id="outros" name="genero" value="outros" required></input></label>  
           </spam>
 
           <br></br>   <br></br>
     
        <spam>
         <Link to= "/Signin"><button type="submit"   name="salvar" id="submit" onsubmit="">Salvar</button></Link>
        </spam>
                              <br></br><br></br>
<spam>
<Link to= "/Signin"><button type="button" name="sair" id="submit1" onsubmit="login"> Sair</button></Link>
</spam>

         <br></br>
         <br></br>
            


    </div>
        
   
</SignupStl>
//</BrowserRouter>

);}

  
