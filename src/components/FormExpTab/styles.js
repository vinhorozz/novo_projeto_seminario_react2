import styled from 'styled-components';

export const ExpTabStl=styled.div`
    box-shadow:0px 0px 0px #000;
     margin:0 auto;
     padding:100px;

h1{   text-align: center;
}

div{
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    height:0% auto;    
    transform: translate(-50%,-50%);
    padding: 20px;
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
    font-size: 13px;
    text-align: center;
}
 
button{
    background-color: dodgerblue;
            border: 12px;
            padding: 5px;
            width: 100%;
            border-radius: 3px;
            color: white;
            font-size: 25px;
            font-weight:bolder;
            &:hover{
            background-color: deepskyblue;
     }            
}

input{
    height:20px;
    width:100%;
    font-size:12px;
    &:hover{
        
    }
}

.box{
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, 0.6);
    padding: 15px;
    border-radius: 15px;
    width: 50%;

}
fieldset{
    border: 1px solid dodgerblue;
    
}

legend{

    border: 1px solid dodgerblue;
    padding: 2px;
    text-align: right auto;
    background-color: dodgerblue;
    border-radius: 3px;
    width:0 auto;
}

.inputBox{
    position: relative;
    
}
.inputUser{
 
    background: none;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    color: white;
    font-size: 15px;
    width: 100%;
    letter-spacing: 2px;
}

.labelInput{
    position: absolute;
    top: 0px;
    left: 0px;
   pointer-events: none;
    transition: .5s;
}
.inputUser:focus ~ .labelInput,
.inputUser:valid ~ .labelInput{
    top: -20px;
    font-size: 12px;
    color: dodgerblue;
}
#data_nascimento{
    border: none;
    padding: 03px;
    border-radius: 3px;
    height:21px;
    top: auto;
    outline: none;
    font-size: 10x;
    ;
    
}

#submit{
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