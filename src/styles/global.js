 import styled from "styled-components";


export const ContainerPage =styled.div`
  body{ 
    font-family: Arial, Helvetica, sans-serif;
    background-image: linear-gradient(245deg, rgb(0, 255, 242), rgb(17, 0, 255)); 
    } `;

export const Bold= styled.b`
b{
  color: red;  
}`;

export const TitlePage= styled.h1`
 h1{
    padding:100px;
    font-family: Arial, Helvetica, sans-serif;
 }`;
 
export const ParagraphPage= styled.p`
 p{
    width: 1x;
    color: green;
}`;

export const containerForm=styled.form`
.box{
box-shadow:auto;
font-size:100px;
}`;

export const Btnform=styled.button`
 button{
  background-color: dodgerblue;
  border: none;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  &:hover{
            background-color: deepskyblue;
            cursor: pointer;
        }
 }`;
export const inputForm= styled.input`
input{
   width: 100%;
   background-color: green;
}`;