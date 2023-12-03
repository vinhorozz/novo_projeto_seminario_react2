import React from 'react';
import { ContainerPage,TitlePage } from "../../styles/global"
import { FormSignup } from '../../components/FormSignup';


const SignupPage=() =>{

    return(
    <div>
        <ContainerPage>
        <TitlePage>
       VOCÊ ESTÁ NA SIGN UP PAGE
        </TitlePage>

     

      <FormSignup/>
      </ContainerPage>
    </div>
    );
}

export default SignupPage;