

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Navbar from './components/Navbar';
import UncontrolledForm from './components/UncontrolledForm';
import ColorChangeDiv from './components/ColorChangeDiv';



function App() {



  return (
    <>

      <Navbar />
      <section className='container-fluid mt-5'>
      {/* <UncontrolledForm/> */}

      <ColorChangeDiv/>

      </section>

    </>
  );
}

export default App;
