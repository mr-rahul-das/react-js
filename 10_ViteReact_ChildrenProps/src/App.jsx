import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Movies from './components/Movies';
import Button from './components/Button';


function App() {


  return (
    <>

      <Navbar>
        <Button color={"btn-warning"}>
          {
            "Total Movies"
          }
        </Button>
      </Navbar>
      <Home >
        <Button color={"btn-primary"}>
          {
            "Watch Now"
          }
        </Button>
      </Home>
      <Dashboard >
        <Button color={"btn-success"}>
          {
            "Go to Home Page"
          }
        </Button>
      </Dashboard>
      <Movies />


    </>
  )
}

export default App
