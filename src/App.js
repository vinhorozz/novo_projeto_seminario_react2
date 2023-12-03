import React,{useState} from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import HomePage from './pages/Home';
import SigninPage from './pages/Signin';
import SignupPage from './pages/Signup';
import AboutPage from './pages/About';
import HelpPage from './pages/Help';
import ValidationPage from './pages/Validation';
//import Nav from './components/NavBar';  
import NAV1 from './components/NavBar';
import { FormSignin } from './components/FormSignin';
import { FormSignup } from './components/FormSignup';
import { FormVAlidation } from './components/FormValidation';
import { FormExp } from './components/FormExpenses';

function App() { 
 {/*const [user,setUser]=useState( )  

  if(user===null){return(<HomePage/>); */}


  return (
    <div>

<BrowserRouter>

<NAV1></NAV1>


          <Routes>

              <Route path="/"      element = {<HomePage/>} > </Route>
              <Route path="/about" element = {<AboutPage/>} > </Route>         
              <Route path="/help"  element = {<HelpPage/>} > </Route>  

              <Route path="/home"   element = {<HomePage/>} > </Route>
              <Route path="/signin" element = {<SigninPage/>} > </Route>

              <Route path="/signup" element = {<SignupPage/>} > </Route>   
              <Route path="/Validation" element = {<ValidationPage/>} > </Route>      
              

          </Routes>

</BrowserRouter>
     </div>
 
  );
}

export default App;