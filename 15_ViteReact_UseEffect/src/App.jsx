
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  let [count,setCount]=useState(0);
  let [city,setCity]=useState("Banagalore");
  
useEffect(()=>console.log("useEffect(CB fn)"));
useEffect(()=>console.log("useEffect(CB fn),[]"),[]);
useEffect(()=>console.log("useEffect(CB fn,[state/props])"),[city,count]);



  return (
    <>
      <Navbar />

      <h3>Count: {count}</h3>
      <button className="btn btn-warning" onClick={()=>setCount(count+1)}>count</button>

      <h3>City: {city}</h3>
      <button className="btn btn-primary" onClick={()=>setCity("pune")}>change city</button>

      <Footer/>

    </>
  )
}

export default App
