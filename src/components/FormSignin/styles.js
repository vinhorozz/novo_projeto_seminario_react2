import styled from 'styled-components';

export const SignStl=styled.div`
     box-shadow:0px 0px 0px #000;
     margin:0 auto;
     
h1{     text-align: center;
}

div{
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    height:0% auto;
    
    transform: translate(-50%,-50%);
    padding: 70px;
    border-radius: 15px;
    color: #fff;
}


a{
    color: lightblue;  
}
b{
    color:lightblue;  
}

label{
    font-size: 18px;
    text-align: center;
}
 button{
            background-color: dodgerblue;
            border: none;
            padding: 10px;
            width: 100%;
            border-radius: 10px;
            color: white;
            font-size: 15px;
            &:hover{
            background-color: deepskyblue;
     }
            
}
input{
    width:100%;
    &:hover{        
    }


}`;