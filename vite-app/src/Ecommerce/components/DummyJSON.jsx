import React from 'react'
import { useEffect, useState } from 'react';


import Product from './Product';
import Loading from './Loading';
import SelectedProduct from './SelectedProduct';
function DummyJSON({ addToCart }) {


    let [prodData, setProdData] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [error, setError] = useState(null);
    let [input, setInput] = useState("");
    let [filteredData, setFilteredData] = useState([]);
    let [selectedProd, setSelectedProd] = useState(null);
    // let [isClose,setIsClose] = useState(false);


    useEffect(() => {
        fetchProd()
    }, []);

    async function fetchProd() {
        try {
            setIsLoading(true);
            setError(null)
            let res = await fetch('https://dummyjson.com/products');
            if (!res.ok) {
                throw new Error("Something went wrong!!!");
            }

            let data = await res.json();
            setProdData(data.products);

        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    function handleSearch(e) {
        let value = e.target.value;
        setInput(value)
        if (value.trim() === "") {
            setFilteredData(prodData);
        }

        setFilteredData(prodData.filter(prod => {
            return (prod.title.toLowerCase().includes(value.toLocaleLowerCase())) ||
                (prod.category.toLowerCase().includes(value.toLocaleLowerCase()))
        }))
    }

    function handleClicked(prod) {
        setSelectedProd(prod);
    }

    function handleClose() {
        setSelectedProd(null);
    }





    return (

        <>
            <div className="container-fluid shadow d-flex justify-content-evenly bg-success p-3">
                <input type="text" className="form-control w-50" placeholder='Search your product by name or category...' value={input} onChange={handleSearch} />
                <button className="btn btn-primary shadow">Total Products: {filteredData.length}</button>
            </div>


            {
                isLoading && <Loading />
            }
            {
                error && <h2>{error}</h2>
            }

            <section className="container-fluid mt-5">
                {/* <Product data={input ? filteredData : prodData} handleClicked={handleClicked} addToCart={addToCart} /> */}


                <div className="row">
                    {
                        (input ? filteredData : prodData).map((prod) => (
                            <div className="col-3 mb-4" key={prod.id}>
                                <div className="card shadow">
                                    <div className="card-header" onClick={() => handleClicked(prod)}>
                                        <img style={{ height: '300px', width: "500px" }} className='img-fluid' src={prod.thumbnail} alt="" />
                                    </div>
                                    <div className="card-body" >
                                        <h5>Title: <i>{prod.title}</i></h5>
                                        <h5>Brand: <i>{prod.brand}</i></h5>
                                        <h6>Price: $ {prod.price}</h6>

                                    </div>
                                    <div className="card-footer d-flex justify-content-evenly">
                                        <button className="btn shadow" onClick={() => addToCart(prod)}>Add to cart</button>
                                        <button className="btn btn-dark">Buy Now</button>

                                    </div>
                                </div>
                            </div>
                        ))
                    }



                </div>




                {
                    selectedProd && 
                    
                    <div className="d-flex justify-content-center align-items-start top-0 start-0 vh-100 vw-100 position-fixed overflow-auto z-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
                        <div className="card w-50 shadow m-5">
                            <div className="card-header position-relative">
                                <img className='img-fluid' src={selectedProd.image} alt={selectedProd.title} />
                                <button className="btn btn-close position-absolute top-0 end-0 m-2" onClick={handleClose}></button>
                            </div>
                            <div className="card-body">
                                <h3>Title: <i>{selectedProd.title}</i></h3>
                                <h5>Description: </h5>
                                <p style={{ textAlign: "justify" }}>{selectedProd.description}</p>
                                <h4>Category: {selectedProd.category}</h4>
                                {/* <h4>Brand: {selectedProd.brand}</h4> */}
                                <h4>Price: $ {selectedProd.price}</h4>
                                <h5>Rating: {selectedProd.rating} <i className="bi bi-star-fill"></i></h5>
                            </div>
                        </div>
                    </div>
                }


            </section>

        </>
    )
}

export default DummyJSON