

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Navbar from './components/Navbar';
// import ConditionalRendering from './components/ConditionalRendering';
// import ThemeSection from './components/ThemeSection';
// import { useState } from 'react';
import Table from './components/Table';



function App() {
  // let [isdark,setTheme] = useState(false);
  // function handleTheme(){
  //   setTheme(!isdark);
  // }


  return (
    <>

      {/* <Navbar theme={isdark} changeTheme={handleTheme} /> */}
      <Navbar/>
      <section className='container-fluid mt-5'>
      {/* <ConditionalRendering/> */}
      {/* <ThemeSection theme={isdark} /> */}

      <Table/>



      </section>

    </>
  );
}

export default App;
