import React from 'react';
import { ContainerPage,TitlePage } from "../../styles/global";
import { FormExp } from '../../components/FormExpenses';


const HomePage=() =>{

    return(
        <ContainerPage>
            <TitlePage>
                <p>se o usuario estiver logado</p>                
             <h1>AQUI É A EXPENSES </h1>
             <p> Se não estiver  </p>
             <h1>AQUI É A HOME </h1>
            </TitlePage>
            <FormExp></FormExp>
        
     </ContainerPage>
 
    );
}

export default HomePage;
