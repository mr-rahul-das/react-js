
import { useState } from 'react';
import Navbar from './components/Navbar';
import Child from './components/Child';
import Parent from './components/Parent';


function App() {

  let [childInput, setChildInput] = useState("");
  let [parentInput, setParentInput] = useState("");
  
   function handleChildData(e){
    e.preventDefault();

   }
   function handleParentData(e){
    e.preventDefault();

   }

  return (
    <>
      <Navbar />

      <section className="container mt-5 text-center">
        <div className="row">
          <div className="col-4">
            <Parent parentInput={parentInput} setParentInput={setParentInput} childData={childInput} handleChildData={handleChildData} />
          </div>
          <div className="col-4">
            <Child childInput={childInput} setChildInput={setChildInput} parentData={parentInput} handleParentData={handleParentData} />

          </div>

        </div>
      </section>

    </>
  )
}

export default App
