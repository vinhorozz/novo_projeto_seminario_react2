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
            background-color: lightcyan;
     }
            
}
input{
    width:100%;
    &:hover{        
    }


}#submit{
    background-image: linear-gradient(to right,rgb(0, 92, 197), rgb(90, 20, 220));
    width: 100%;
    border: none;
    padding: 15px;
    color: white;
    font-size: 15px;
    cursor: pointer;
    border-radius: 10px;
}
#submit:hover{
    background-image: linear-gradient(to right,rgb(0, 80, 172), rgb(80, 19, 195));
}
    #submit1{
        background-image: linear-gradient(to right,rgb(0, 92, 197), rgb(90, 20, 220));
        width: 100%;
        border: none;
        padding: 15px;
        color: white;
        font-size: 15px;
        cursor: pointer;
        border-radius: 10px;
    }
    #submit1:hover{
        background-image: linear-gradient(to right,rgb(0, 80, 172), rgb(80, 19, 195));
    }



`;