// import PrintMsg from "./components/PrintMsg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css"
import Card from "./components/Card";
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      {/* <PrintMsg/> */}
      <Navbar />
      <div className='container-fluid mt-5'>
        
          <Card />

      </div>

    </div>
  );
}

export default App;
