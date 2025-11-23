import React from 'react'
import { useEffect, useState } from 'react';


import Product from './Product';
import Loading from './Loading';
import SelectedProduct from './SelectedProduct';

function ProductItems({addToCart}) {

    let [prodData, setProdData] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [error, setError] = useState(null);
    let [input, setInput] = useState("");
    let [filteredData, setFilteredData] = useState([]);
    let [selectedProd, setSelectedProd] = useState(null);
    // let [isClose,setIsClose] = useState(false);


    useEffect(() => {
        fetchProd()
    },[]);

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
            <div className="container-fluid shadow d-flex justify-content-evenly bg-primary p-3">
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
                <Product data={input ? filteredData : prodData} handleClicked={handleClicked} addToCart={addToCart} />

                {
                    selectedProd && <SelectedProduct prod={selectedProd} handleClose={handleClose} addToCart={addToCart} />
                }

            </section>

        </>
    )
}

export default ProductItems;