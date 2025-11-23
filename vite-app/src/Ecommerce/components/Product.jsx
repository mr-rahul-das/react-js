import React from 'react'

function Product({ data, handleClicked, addToCart }) {
    return (

        <>
            <div className="row">

                {
                    data.map((prod) => (
                        <div className="col-3 mb-4" key={prod.id}>
                            <div className="card shadow">
                                <div className="card-header" onClick={() => handleClicked(prod)}>
                                    <img style={{ height: '300px', width: "500px" }} className='img-fluid' src={prod.image} alt="" />
                                </div>
                                <div className="card-body" >
                                    <h5>Title: <i>{prod.title}</i></h5>
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

        </>
    )
}

export default Product