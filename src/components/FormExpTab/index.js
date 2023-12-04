import React, { useState } from 'react';

import { ExpTabStl} from './styles';
import { Btnform } from '../../styles/global';
import { BrowserRouter, Router , Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Bold } from '../../styles/global';
import HomePage from '../../pages/Home';
//import{ ExpenseTable} from '../Tables';

export const FormExpTab=()=>{
  return( 

    //<BrowserRouter>
    <ExpTabStl>    
  
    <div className ='form_input' container='box'>

    <h1><Bold>Registros despesas realizadas</Bold></h1>  
    <br></br>

<spam>
   


<br></br><br></br>
            <spam> Até o momento, você já gastou: <button>R$ 5000,00</button></spam>
       
          
           
</spam>
<br></br><br></br>
    <spam>
<Link to= "/Expenses"><button type="button" name="adicionar" id="submit1" onsubmit=""> Novo registo</button></Link>
</spam>
<br></br><br></br>
<spam>
<Link to= "/Expenses"><button type="button" name="alterar" id="submit1" onsubmit=""> Alterar registo</button></Link>
</spam>
<br></br><br></br>
<spam>
<Link to= ""><button type="button" name="excluir" id="submit1" onsubmit=""> Excluir registro</button></Link>
</spam>
<br></br><br></br>
<spam>
<Link to= "/"><button type="button" name="sair" id="submit1" onsubmit="logoff"> Sair</button></Link>
</spam>

{/*

 const[user,setUser] =useState({

 });

if(user===null){
  return(<HomePage/>)
}*/}


  
 </div>
</ExpTabStl>
//</BrowserRouter>

);}

  
