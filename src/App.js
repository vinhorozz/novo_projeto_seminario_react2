import React,{useState} from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import HomePage       from './pages/Home';
import SigninPage     from './pages/Signin';
import SignupPage     from './pages/Signup';
import AboutPage      from './pages/About';
import HelpPage       from './pages/Help';
import ValidationPage from './pages/Validation';
import ExpensesPage   from './pages/Expenses';
//import Nav from './components/NavBar';  
import NAV1 from './components/NavBar';

import { FormSignin }     from './components/FormSignin';
import { FormSignup }     from './components/FormSignup';
import { FormValidation } from './components/FormValidation';
import { FormExp }        from './components/FormExpenses';



function App() { 

{/* */} const[user, setUser] = useState();
// let[user, setUser] = useState({});

if (user === null){return( <SigninPage/> );} 

  return (
    <div>

<BrowserRouter>

<NAV1></NAV1>''


          <Routes>

              <Route path="/"      element = {<HomePage/>} > </Route>
              <Route path="/about" element = {<AboutPage/>} > </Route>         
              <Route path="/help"  element = {<HelpPage/>} > </Route>  

              <Route path="/home"   element = {<HomePage/>} > </Route>
              <Route path="/signin" element = {<SigninPage/>} > </Route>

              <Route path="/signup" element = {<SignupPage/>} > </Route>   
              <Route path="/validation" element = {<ValidationPage/>} > </Route>      
              <Route path="/expenses" element = {<ExpensesPage/>} > </Route>      
              

          </Routes>

</BrowserRouter>
     </div>
 
  );
}

export default App;