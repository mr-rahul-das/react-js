

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Navbar from './components/Navbar';
import CountCard from './components/CountCard';



function App() {

  return (
    <>

      <Navbar/>

      <section className='container-fluid mt-5'>

      <CountCard/>

      </section>

    </>
  );
}

export default App;
