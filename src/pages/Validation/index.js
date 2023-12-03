import React from 'react';
import { ContainerPage,TitlePage} from "../../styles/global"
import { FormValidation } from '../../components/FormValidation';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
 const ValidationPage=() =>{

    return(

<div>
    <ContainerPage>
        <TitlePage>    
   

        </TitlePage>  
      <FormValidation/>
    </ContainerPage>
</div>  

    );}

export default ValidationPage;
