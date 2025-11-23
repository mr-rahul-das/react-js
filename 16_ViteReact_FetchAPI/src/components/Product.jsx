import React from 'react'

function Product({ data,handleClicked }) {
    return (

        <>
            <div className="row">

                {
                    data.map((prod) => (
                        <div className="col-3 mb-4" key={prod.id}>
                            <div className="card shadow" onClick={()=>handleClicked(prod)}>
                                <div className="card-header">
                                    <img style={{ height: '300px', width: "500px" }} className='img-fluid' src={prod.image} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>Title: <i>{prod.title}</i></h5>
                                    <h6>Price: $ {prod.price}</h6>
                                </div>
                                <div className="card-footer text-center">
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