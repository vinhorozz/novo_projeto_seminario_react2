import React from 'react';
import { ContainerPage,TitlePage} from "../../styles/global"
import { FormSignin } from '../../components/FormSignin'; 
import SignupPage from '../Signup';



 const SigninPage=() =>{

    return(


<div >
    <ContainerPage>
        <TitlePage>    
       
        </TitlePage>

        <FormSignin/>
    </ContainerPage>
</div>  

    );}

export default SigninPage;
