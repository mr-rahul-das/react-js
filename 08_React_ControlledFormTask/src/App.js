

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import { useState } from 'react';
import LoginForm from './components/LoginForm';



function App() {

  let [isLogin,setIsLogin]=useState(false);

  function handleLogin(){
    setIsLogin(!isLogin);
    setIsRegister(false);
  }

  let [isRegister,setIsRegister]=useState(false);

  function handleRegister(){
    setIsRegister(!isRegister);
    setIsLogin(false);
  }


  return (
    <>

      <Navbar event={{handleLogin,handleRegister}}/>
      <section className='container-fluid mt-5'>
    

      {isLogin && <LoginForm event={handleLogin}/> }  
      {isRegister && <RegisterForm event={handleRegister}/>}  


      </section>

    </>
  );
}

export default App;
