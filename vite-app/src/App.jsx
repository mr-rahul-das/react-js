
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './components/Product';
import Loading from './components/Loading';

function App() {

  let [prodData, setProdData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState(null);
  let [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      fetchProd()
    }
  }, [isClicked]);

  async function fetchProd() {

    try {
      setIsLoading(true);
      setError(null)
      let res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) {
        throw new Error("Something went wrong!!!");

      }
      let data = await res.json();
      setProdData(data);
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }

  }

  function viewAllProd() {
    setIsClicked(true);

  }


  return (
    <>
      <Navbar />

      <section className="container mt-3 ">
        <div className="row text-center">
          <div className="col-4">
            <button className="btn btn-warning" onClick={viewAllProd}>View All Products</button>
          </div>
          <div className="col-4">
            <button className="btn btn-primary">Total Products: {prodData.length}</button>
          </div>
          <div className="col-4">
            <button className="btn btn-success">Something....</button>
          </div>
        </div>
      </section>


      {
        isLoading && <Loading />
      }
      {
        error && <h2>{error}</h2>
      }

      <Product data={prodData} />

      <Footer />

    </>
  )
}

export default App
