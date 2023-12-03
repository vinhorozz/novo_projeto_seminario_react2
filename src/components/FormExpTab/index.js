import React from 'react';
import { ExpTabStl} from './styles';
import { Btnform } from '../../styles/global';
import { BrowserRouter, Router , Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Bold } from '../../styles/global';

export const FormExp=()=>{
  return( 

    //<BrowserRouter>
    <ExpTabStl>    
  
    <div className ='form_input' container='box'>

    <h1><Bold>Registros despesas realizadas</Bold></h1>  
    <br></br>

<th>
  
</th>


    <spam>
<Link to= "/home"><button type="button" name="sair" id="submit1" onsubmit="login"> Salvar registo</button></Link>
</spam>
<br></br><br></br>
<spam>
<Link to= "/home"><button type="button" name="sair" id="submit1" onsubmit="login"> Acessar registros</button></Link>
</spam>
<br></br><br></br>
<spam>
<Link to= "/home"><button type="button" name="sair" id="submit1" onsubmit="login"> Sair</button></Link>
</spam>

  
 </div>
</ExpTabStl>
//</BrowserRouter>

);}

  
