

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css";
import HWNavbar from './components/Assignment/HWNavbar';
import HWTable from "./components/Assignment/HWTable";



function App() {

  return (
    <>
      <HWNavbar />
      <section className='container-fluid mt-5'>

        <HWTable/>

      </section>

    </>
  );
}

export default App;
