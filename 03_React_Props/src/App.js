

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css";
// import Card from "./components/Card";
// import Navbar from './components/Navbar';
// import CR7 from "./assetes/CR7.jpg";
// import SpiderMan from "./assetes/Spiderman.jpg";
// import Vijay from "./assetes/Vijay.jpg";
import HWNavbar from './Assignment/HWNavbar';
import HWMain from './Assignment/HWMain';
import HWContact from './Assignment/HWContact';
// let Virat = "https://wallpapercave.com/wp/wp12122718.jpg";


function App() {
  return (
    <div className="App">

      {/* <Navbar />
      <section className='container-fluid mt-5'>
        <div className='row m-2'>
          <Card image={CR7} name="Cristiano Ronaldo" />
          <Card image={SpiderMan} name="Peter Parkar" />
          <Card image={Vijay} name="Thalapathy Vijay" />
          <Card image={Virat} name="Virat Kohli" />
        </div>
      </section> */}

      <HWNavbar/>
      <HWMain/>
      <HWContact/>




      

    </div>
  );
}

export default App;
