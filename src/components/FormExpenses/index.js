import React from 'react';
import { FromExStl } from './styles';
import { Btnform } from '../../styles/global';
import { BrowserRouter, Router , Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Bold } from '../../styles/global';

export const FormExp=()=>{
  return( 

    //<BrowserRouter>
    <FromExStl>    
  

    <div className ='form_input' container='box'>

    <h1><Bold>Registrar despesas</Bold></h1>  
    <br></br>

<label for="data_da_despesa">Data da despesa </label> <br></br><input type="date" name="data_da_despesa" id="data_da_despesa" required ></input>

    <br></br>
    <label>Nome da empresa/ prestador de serviço </label><br></br>
    <inputForm><input type="text" placeholder="Nome da empresa/ prestador de serviço"></input></inputForm> 
    <br></br>
    <label>Descrição do gasto</label><br></br>
    <inputForm><input type="text" placeholder="Descrição do gasto"></input></inputForm> 
    <br></br>
    <label>Valor pago</label><br></br>
    <inputForm><input type="text" placeholder="Ex.: R$ 1002,75"></input></inputForm> 
    <br></br>
    <label>Forma de pagamento</label><br></br>
    <inputForm><input type="text" placeholder="Ex.: dinheiro, cartão, PIX, boleto, WhatsApp..."></input></inputForm> 
    <br></br><br></br>

    <br></br><br></br>
    <spam>
<Link to= "/home"><button type="button" name="sair" id="submit1" onsubmit="login"> Salvar registo e adicionar nova</button></Link>
</spam>
<br></br><br></br>


<spam>
<Link to= "/home"><button type="button" name="sair" id="submit1" onsubmit="login"> Salvar registo</button></Link>
</spam>
<br></br><br></br>
<spam>
<Link to= "/home"><button type="button" name="sair" id="submit1" onsubmit="login"> Sair</button></Link>
</spam>

  
 </div>
</FromExStl>
//</BrowserRouter>

);}

  