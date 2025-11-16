

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Navbar from './components/Navbar';
// import ControlledForm from './components/ControlledForm';
// import ControllObject from './components/ControllObject';
import RegisterForm from './components/RegisterForm';
import { useState } from 'react';
import LoginForm from './components/LoginForm';



function App() {

  let [showForm,setShowForm]=useState(null);

  function handleClicked(formName){
    setShowForm(formName);
  }


  return (
    <>

      <Navbar event={handleClicked}/>
      <section className='container-fluid mt-5'>
    
      {/* <ControlledForm/> */}
      {/* <ControllObject/> */}

      {showForm==="register" && <RegisterForm/>}  
      {showForm==="login" && <LoginForm/> }  


      </section>

    </>
  );
}

export default App;
